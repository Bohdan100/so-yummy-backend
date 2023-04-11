const express = require("express");
const { favorite: ctrl } = require("../../controllers");
const { auth } = require("../../middlewares");

const router = express.Router();

router.get("/", auth, ctrl.getFavorites);

router.get("/:recipeId", auth, ctrl.getFavoriteById);

router.post("/:recipeId", auth, ctrl.addFavorite);

router.delete("/:recipeId", auth, ctrl.deleteFavorite);

module.exports = router;
