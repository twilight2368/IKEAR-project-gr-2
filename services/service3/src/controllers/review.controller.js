const CommentModel = require("../models/schemas/Review");

const getReview = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reviewList = await CommentModel.find({
      item: id,
    });

    if (!reviewList || reviewList.length === 0) {
      res.status(404).json({ message: "No reviews found", data: [] });
    }

    res.json({ message: "Reviews found", data: reviewList });
  } catch (error) {
    next(error);
  }
};

const addReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user, rating, comment } = req.body;

    const newReview = new CommentModel({
      user: user,
      item: id,
      rating,
      comment,
    });

    const review = await newReview.save();

    res.status(201).json({ message: "Review added", data: review });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReview,
  addReview,
};
