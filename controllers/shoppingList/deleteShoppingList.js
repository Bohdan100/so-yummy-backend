const { ShoppingList } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteShoppingList = async (req, res, next) => {
  const data = await ShoppingList.findByIdAndDelete(req.params.id);
  if (data) {
    res.send({ id: data._id });
  } else {
    throw HttpError(400);
  }
};

module.exports = deleteShoppingList;
