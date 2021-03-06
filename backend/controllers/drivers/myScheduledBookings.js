const Booking = require("../../models/Bookings");
const {errorCodes} = require("../../helper/errorCodes");
const {
  serverErrorResponse,
  notFoundResponse,
  successfulGetResponse,
} = require("../../helper/responses");

exports.driverScheduledBookings = async (req, res) => {
  const driverId = req.body.driverId;
  if (!driverId) {
    onMissingValResponse(
      res,
      errorCodes.MISSING_VAL,
      "driver id is missing."
    );
    return;
  }

  try {
    const myBookings = await Booking.find({
      driverId,
      $or: [
        { status: "insearch" },
        { status: "waiting" },
        { status: "arrived" },
        { status: "inprogress" },
      ],
    });
    if (myBookings.length > 0) {
      successfulGetResponse(res, { myBookings });
    } else {
      notFoundResponse(
        res,
        errorCodes.BOOKING_NOT_FOUND,
        "NO_BOOKINGS",
        "There are no bookings."
      );
    }
  } catch (err) {
    serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
