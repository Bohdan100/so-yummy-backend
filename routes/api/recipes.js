const express = require("express");
const router = express.Router();
const { isValidId } = require("../../middlewares");
const { auth } = require("../../middlewares");
const { recipes: ctrl } = require("../../controllers");

router.get("/", auth, ctrl.getRecipesByFourCategories);

router.get("/category-list", auth, ctrl.getCategoriesList);

router.get("/:recipeId", auth, isValidId, ctrl.getRecipeById);

router.get("/categories/:categoryName", auth, ctrl.getRecipesByCategory);

module.exports = router;
