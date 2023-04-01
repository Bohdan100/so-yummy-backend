const path = require("path");
const { ctrlWrapper } = require(path.join(__dirname, "..", "..", "helpers"));

const { getCategoriesList } = require("./getCategoryList");

module.exports = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
};
