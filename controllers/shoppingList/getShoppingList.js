const { ShoppingList } = require("../../models");

const getShoppingList = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await ShoppingList.find({ owner });
  res.json(result);
};

module.exports = getShoppingList;
