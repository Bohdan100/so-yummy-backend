const express = require("express");

const { auth, validateBody } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const {
  signup,
  login,
  logout,
  getCurrent,
  subscriptionStatusUpdate,
} = require("../../controllers/auth.controller");

const { userAuthSchema, subscriptionStatusSchema } = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(userAuthSchema), ctrlWrapper(signup));
router.post("/login", validateBody(userAuthSchema), ctrlWrapper(login));
router.get("/current", auth, ctrlWrapper(getCurrent));
router.get("/logout", auth, ctrlWrapper(logout));
router.patch(
  "/",
  auth,
  validateBody(subscriptionStatusSchema),
  ctrlWrapper(subscriptionStatusUpdate)
);

module.exports = router;
