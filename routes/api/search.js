const express = require("express");
const router = express.Router();

const { auth } = require("../../middlewares");
const { search: ctrl } = require("../../controllers");

router.get("/", auth, ctrl.getSearchRecipes);

module.exports = router;
