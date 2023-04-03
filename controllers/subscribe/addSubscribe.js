const { Subscribe } = require("../../models");
const { HttpError } = require("../../helpers");

const { sendEmail } = require("../../services");

const addSubscribe = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { email } = req.body;

  const userSub = await Subscribe.findOne({ owner });
  const emailSub = await Subscribe.findOne({ email });

  if (userSub) {
    throw HttpError(409, `User is already subscribed`);
  }

  if (emailSub) {
    throw HttpError(409, `The email belongs to another user`);
  }

  const result = await Subscribe.create({
    ...req.body,
    owner,
  });

  const emailToSend = {
    to: email,
    subject: "Subscription notification",
    html: `<p>You have subscribed to the So Yummy newsletter</p>`,
  };

  await sendEmail(emailToSend);

  res.status(201).json(result);
};

module.exports = addSubscribe;
