const Trip = require("../../models/Trips");
const Booking = require("../../models/Bookings");
const Driver = require("../../models/Drivers");
const User = require("../../models/Users");
const { tripLog, endRide } = require("../../blockchain/callingBlockchain");
const { errorCodes } = require("../../helper/errorCodes");
const {
  onMissingValResponse,
  serverErrorResponse,
  onCreationResponse,
  unAuthorizedResponse,
} = require("../../helper/responses");
const {
  calculateTotal,
  calculateTravellingCost,
  calculateWaitTime,
} = require("../../helper/pricing");

exports.endTrip = async (req, res) => {
  const { bookingId, driverId, distance } = req.body;
  if (!bookingId || !driverId || !distance) {
    onMissingValResponse(
      res,
      errorCodes.MISSING_VAL,
      "Either booking id, driver id or distance travelled is missing."
    );
  }
  try {
    const booking = await Booking.findOne({
      _id: bookingId,
      driverId,
      status: "inprogress",
    });
    if (!booking) {
      unAuthorizedResponse(res, errorCodes.UNAUTHORIZED);
      return;
    }
    const milage = (
      await Driver.findOne({ _id: booking.driverId }).select("milage")
    ).milage;
    const trip = await Trip.findOne({ bookingId });
    const endTime = Date.now();
    const tripDetails = {
      endTime,
      duration: endTime - trip.startTime,
      distance: distance / 1000,
      fuelCost: process.env.FUEL_PRICE,
      disputeCost: process.env.DISPUTE_COST,
      milesCost: calculateTravellingCost(distance, milage),
      waitTimeCost: calculateWaitTime(trip.waitTime.getTime() / (1000 * 60)),
      waitTimeCostPerMin: process.env.WAIT_TIME_COST_PER_MIN,
      total: Math.ceil(calculateTotal(
        distance,
        milage,
        trip.waitTime.getTime() / (1000 * 60)
      )),
    };

    const riderId = booking.riderId;
    const riderWalletAddress = (
      await User.findById({ _id: riderId }).select("walletAddress")
    ).walletAddress;

    const driverUserId = (await Driver.findOne({ driverId }).select("userId"))
      .userId;
    const driverWalletAddress = (
      await User.findById({ _id: driverUserId }).select("walletAddress")
    ).walletAddress;

    await Trip.updateOne({ bookingId }, tripDetails);
    await Booking.updateOne({ _id: bookingId }, { status: "completed" });
    await Driver.updateOne({ _id: driverId }, { isBusy: false });
    const tripSaved = await Trip.findOne({ bookingId });
    await endRide(riderWalletAddress, driverWalletAddress, Math.ceil(tripSaved.total));
    await tripLog(
      bookingId,
      tripSaved.distance,
      tripSaved.startTime,
      tripSaved.endTime,
      tripSaved.total,
      tripSaved.fuelCost,
      tripSaved.waitTimeCostPerMin,
      tripSaved.disputeCost,
      tripSaved.waitTimeCost,
      tripSaved.milesCost
    );
    onCreationResponse(res, { tripDetails });
  } catch (err) {
    console.log(err)
    serverErrorResponse(res, err, errorCodes.SERVER_ERROR);
  }
};
