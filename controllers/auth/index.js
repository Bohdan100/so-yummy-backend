const { ctrlWrapper } = require("../../helpers");

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const refresh = require("./refresh");
const updateUser = require("./updateUser");
const { googleAuth, googleRedirect } = require("./authGoogle");

module.exports = {
  signup: ctrlWrapper(signup),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  refresh: ctrlWrapper(refresh),
  updateUser: ctrlWrapper(updateUser),
  googleAuth: ctrlWrapper(googleAuth),
  googleRedirect: ctrlWrapper(googleRedirect),
};
