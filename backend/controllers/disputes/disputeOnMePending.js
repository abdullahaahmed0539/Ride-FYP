const Dispute = require("../../models/Disputes");
const {errorCodes} = require("../../helper/errorCodes");

const {
  serverErrorResponse,
  notFoundResponse,
  successfulGetResponse,
} = require("../../helper/responses");

exports.disputesOnMePending = async (req, res) => {
    const userId = req.params.id;

  try {
    const disputes = await Dispute.find({
      defenderId: userId,
      status: "pending",
    });
    if (disputes.length === 0) {
      notFoundResponse(
        res,
        errorCodes.DISPUTE_NOT_FOUND,
        "disputesNotFound",
        "There are no disputes on this user."
      );
    } else {
      if (disputes.length < 3) {
        successfulGetResponse(res, {
          disputes,
        });
      } else {
        successfulGetResponse(res, {
          disputes: [disputes[0], disputes[1], disputes[2]],
        });
      }
    }
  } catch (err) {
    serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
