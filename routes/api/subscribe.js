const express = require("express");
const router = express.Router();

const { auth, validateBody } = require("../../middlewares");
const { subscribeUserSchema } = require("../../schemas");
const { subscribe: ctrl } = require("../../controllers");

router.post("/", auth, validateBody(subscribeUserSchema), ctrl.addSubscribe);

module.exports = router;
