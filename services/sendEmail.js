const nodemailer = require("nodemailer");
require("dotenv").config();

const { OUTLOOK_PASSWORD, BASE_EMAIL } = process.env;

const nodemaoilerConfig = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: `${BASE_EMAIL}`,
    pass: OUTLOOK_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemaoilerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: `${BASE_EMAIL}` };
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmail;
