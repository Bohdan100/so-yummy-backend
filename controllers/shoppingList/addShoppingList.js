const { ShoppingList } = require("../../models");

const addShoppingList = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await ShoppingList.create({
    ...req.body,
    owner,
  });

  res.status(201).json(result);
};

module.exports = addShoppingList;
