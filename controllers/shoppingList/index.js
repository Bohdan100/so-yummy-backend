const { ctrlWrapper } = require("../../helpers/ctrlWrapper");
const getShoppingList = require("./getShoppingList");
const addShoppingList = require("./addShoppingList");
const deleteShoppingList = require("./deleteShoppingList");

module.exports = {
  getShoppingList: ctrlWrapper(getShoppingList),
  addShoppingList: ctrlWrapper(addShoppingList),
  deleteShoppingList: ctrlWrapper(deleteShoppingList),
};
