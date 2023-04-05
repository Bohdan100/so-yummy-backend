const { ShoppingList } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteShoppingList = async (req, res, next) => {
  const { id } = req.params;
  const result = await ShoppingList.findByIdAndRemove(id);
  if (!result) {
    next(HttpError(404, "Not found"));
  }
  res.json({ message: "Success remove ingredient from shoping list" });
};

module.exports = deleteShoppingList;
