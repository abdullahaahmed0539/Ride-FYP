const Dispute = require("../../models/Disputes");
const {
  serverErrorResponse,
  notFoundResponse,
  successfulGetResponse,
} = require("../../helper/responses");

const errorCodes = {
  NOT_FOUND: "DISPUTE_NOT_FOUND",
  SERVER_ERROR: "INTERNAL_SERVER_ERROR",
};

exports.disputeDetails = async (req, res) => {
  const _id = req.params.id;

  try {
    const disputeDetails = await Dispute.findOne({ _id });
    if (disputeDetails) {
      successfulGetResponse(res, {
        disputeDetails,
      });
    } else {
      notFoundResponse(
        res,
        errorCodes.NOT_FOUND,
        "disputeNotFound",
        "The following dispute does not exist."
      );
    }
  } catch (err) {
    serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
