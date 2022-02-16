const Dispute = require("../../models/Disputes");
const {
  serverErrorResponse,
  notFoundResponse,
} = require("../../helper/responses");

const errorCodes = {
  NOT_FOUND: "DISPUTE_NOT_FOUND",
  SERVER_ERROR: "INTERNAL_SERVER_ERROR",
};

exports.myDisputes = async (req, res) => {
  const userId = req.params.id;

  try {
    const disputes = await Dispute.find({ initiatorId: userId });
    if (disputes.length === 0) {
      notFoundResponse(
        res,
        errorCodes.NOT_FOUND,
        "disputesNotFound",
        "There are no disputes against this user."
      );
    } else {
      res.status(200).json({
        request: "successful",
        error: {},
        data: {
          disputes,
        },
      });
    }
  } catch (err) {
    serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
