const Trip = require("../../models/Trips");
const Booking = require("../../models/Bookings");
const { errorCodes } = require("../../helper/errorCodes");

const {
  serverErrorResponse,
  onMissingValResponse,
  notFoundResponse,
  unAuthorizedResponse,
} = require("../../helper/responses");

exports.tripDetails = async (req, res) => {
  const { bookingId, userId, mode } = req.body;

  if (!bookingId || !userId || !mode) {
    onMissingValResponse(
      res,
      errorCodes.MISSING_VAL,
      "Booking id, driver mode or user id is missing."
    );
    return;
  }

  try {
    let userDetail;
    if (mode === 'driver') {
      userDetail = {
        _id: bookingId,
        driverId: userId,
      };
    } else {
      userDetail = {
        _id: bookingId,
        riderId: userId,
      };
    }

    const booking = await Booking.findOne(userDetail);
    if (!booking) {
      unAuthorizedResponse(res, errorCodes.UNAUTHORIZED);
      return;
    }

    const trip = await Trip.findOne({ bookingId });
    if (!trip) {
      notFoundResponse(
        res,
        errorCodes.NOT_FOUND,
        "TRIP_NOT_FOUND",
        "There are no trips with the booking id provided."
      );
    } else {
      res.status(200).json({
        request: "successful",
        error: {},
        data: {
          trip,
        },
      });
    }
  } catch (err) {
    serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
