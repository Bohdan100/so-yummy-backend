const express = require("express");
const router = express.Router();

const { recipes: ctrl } = require("../../controllers");

router.get("/category-list", ctrl.getCategoriesList);

router.get("/:recipeId", ctrl.getRecepieById);

router.get("/categories/:categoryName", ctrl.getRecepiesByCategory);

module.exports = router;
