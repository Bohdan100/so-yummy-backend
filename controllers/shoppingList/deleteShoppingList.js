const { ShoppingList } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteShoppingList = async (req, res, next) => {
  const { id } = req.params;
  const result = await ShoppingList.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "shoping list deleted" });
};

module.exports = deleteShoppingList;
