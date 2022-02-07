const Dispute = require("../../models/Disputes");

const errorCodes = {
  NOT_FOUND: "DISPUTE_NOT_FOUND",
  SERVER_ERROR: "INTERNAL_SERVER_ERROR",
};

exports.myDisputes = async (req, res) => {
  const userId = req.params.id;

  try {
    const disputes = await Dispute.find({ initiatorId: userId });
    if (disputes.length === 0) {
      res.status(404).json({
        request: "unsuccessful",
        error: {
          code: errorCodes.NOT_FOUND,
          name: "disputesNotFound",
          message: "There are no disputes against this user.",
          logs: "",
        },
        data: {},
      });
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
    res.status(500).json({
      request: "unsuccessful",
      error: {
        code: errorCodes.SERVER_ERROR,
        name: err.name,
        message: err.message,
        logs: err,
      },
      data: {},
    });
  }
};
