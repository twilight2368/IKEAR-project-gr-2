const FavModel = require("../models/schemas/FavoriteList");

const getFavItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const favItem = await FavModel.find({
      user: id,
    });

    if (!favItem || favItem.length === 0) {
      res.status(404).json({ message: "No favorite items found", data: [] });
    }

    res.json({ message: "Favorite items found", data: favItem });
  } catch (error) {
    next(error);
  }
};

const addFavItem = async (req, res, next) => {
  try {
    const { user, item } = req.body;

    const _favItem = await FavModel.findOne({ user: user, item: item });

    if (_favItem) {
      return res.status(400).json({ message: "Item already in favorite list" });
    }

    const newFavItem = new FavModel({
      user: user,
      item: item,
    });

    const favItem = await newFavItem.save();

    res.status(201).json({ message: "Favorite item added", data: favItem });
  } catch (error) {
    next(error);
  }
};

const removeFavItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    await FavModel.findByIdAndDelete(id);

    res.json({ message: "Favorite item removed" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFavItem,
  addFavItem,
  removeFavItem,
};
