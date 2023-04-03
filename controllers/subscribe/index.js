const { ctrlWrapper } = require("../../helpers");
const addSubscribe = require("./addSubscribe");

module.exports = {
  addSubscribe: ctrlWrapper(addSubscribe),
};
