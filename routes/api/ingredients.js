const express = require("express");

// const { auth } = require("../../middlewares");

const { ingredients: ctrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/list",
  // auth,
  ctrl.getIngredientsList
);

router.get(
  "/:query",
  //   auth,
  ctrl.getIngredients
);

module.exports = router;
