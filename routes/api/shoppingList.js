const express = require("express");
const router = express.Router();

const { auth, validateBody } = require("../../middlewares");
const { addShoppingListSchema } = require("../../schemas");
const { shoppingList: ctrl } = require("../../controllers");

router.get("/", auth, ctrl.getShoppingList);

router.post(
  "/",
  auth,
  validateBody(addShoppingListSchema),
  ctrl.addShoppingList
);

router.delete("/:id", auth, ctrl.deleteShoppingList);

module.exports = router;
