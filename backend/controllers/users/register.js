const User = require("../../models/Users");
const { AES_encrypt, SHA3 } = require("../../helper/encryption");
const { validateUserInfo } = require("../../helper/validators");
const {
  serverErrorResponse,
  onCreationResponse,
  onMissingValResponse,
  notUniqueResponse,
  incorrectFormatResponse,
} = require("../../helper/responses");

const errorCodes = {
  SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  MISSING_VAL: "MISSING-VALUE",
  INCORRECT_FORMAT: "INCORRECT-FORMAT",
  NOT_UNIQUE: "NOT-UNIQUE",
};

exports.register = async (req, res) => {
  const { phoneNumber, country, firstName, lastName, email, walletAddress } =
    req.body;

  //check if neccessary attributes are available.
  if (
    !phoneNumber ||
    !country ||
    !firstName ||
    !lastName ||
    !email ||
    !walletAddress
  ) {
    onMissingValResponse(
      res,
      errorCodes.MISSING_VAL,
      "phoneNumber, country, firstName, lastName, email or walletAddress is missing."
    );
    return;
  }

  //validate format
  if (validateUserInfo(email, phoneNumber, country)) {
    encryptedWalletAddress = AES_encrypt(walletAddress);
    hash = SHA3(walletAddress);
  } else {
    incorrectFormatResponse(
      res,
      errorCodes.INCORRECT_FORMAT,
      "FormatError",
      "Either phone number or email is invalid"
    );
    return;
  }

  //creating a new user
  const newUser = new User({
    phoneNumber,
    country,
    firstName,
    lastName,
    email,
    walletAddress: encryptedWalletAddress,
    walletHash: hash,
    isDriver: false,
    rating: [],
  });

  try {
    //save the user in db and sending response
    const user = await newUser.save();
    onCreationResponse(res, {});
  } catch (err) {
    //Error handling for not unique or any other server error
    err.name === "MongoServerError" && err.code === 11000
      ? notUniqueResponse(res, err, errorCodes.NOT_UNIQUE)
      : serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
