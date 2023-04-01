const { ctrlWrapper } = require("../../helpers");

const getCategoriesList = require("./getCategoriesList");
const getRecepieById = require("./getRecepieById");
const getRecepiesByCategory = require("./getRecepiesByCategory");

module.exports = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecepieById: ctrlWrapper(getRecepieById),
  getRecepiesByCategory: ctrlWrapper(getRecepiesByCategory),
};
