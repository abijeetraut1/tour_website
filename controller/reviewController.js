const Review = require('./../models/reviewModel');
// const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.userTourid = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.id) req.body.user = req.user.id;
  next();
};

exports.getAllReview = factory.getAll(Review);
exports.getReview = factory.getOne(Review); // byud
exports.createNewReview = factory.createOne(Review); //creating new review
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
