const nodemailer = require("nodemailer");
require("dotenv").config();

const { OUTLOOK_PASSWORD } = process.env;

const nodemaoilerConfig = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "so-yummy-pg3@outlook.com",
    pass: OUTLOOK_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemaoilerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "so-yummy-pg3@outlook.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
