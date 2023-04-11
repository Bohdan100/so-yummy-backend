const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { auth, validateBody } = require("../../middlewares");
const {
  userJoiRegisterSchema,
  userJoiLoginSchema,
  userJoiSchemaUpdate,
} = require("../../schemas");
const { uploadCloud } = require("../../middlewares/uploadAvatar");

const router = express.Router();

router.post("/signup", validateBody(userJoiRegisterSchema), ctrl.signup);
router.post("/login", validateBody(userJoiLoginSchema), ctrl.login);
router.get("/current", auth, ctrl.getCurrentUser);
router.get("/logout", auth, ctrl.logout);
router.patch(
  "/edit",
  auth,
  uploadCloud,
  validateBody(userJoiSchemaUpdate),
  ctrl.updateUser
);

router.get("/google", ctrl.googleAuth);
router.get("/google-redirect", ctrl.googleRedirect);

module.exports = router;
