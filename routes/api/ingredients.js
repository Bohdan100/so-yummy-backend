const express = require("express");
const router = express.Router();

const { auth } = require("../../middlewares");
const { ingredients: ctrl } = require("../../controllers");

router.get("/list", auth, ctrl.getIngredientsList);

router.get("/:query", auth, ctrl.getIngredients);

module.exports = router;
