const express = require("express");
const router = express.Router();

const path = require("path");
const { recipes: ctrl } = require(path.join(
  __dirname,
  "..",
  "..",
  "controllers"
));

router.get("/category-list", ctrl.getCategoriesList);

module.exports = router;
