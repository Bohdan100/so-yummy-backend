const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  // if (user.token) {
  //   throw HttpError(409, "Only one active session is permitted");
  // }

  const passwordCompare = bcrypt.compareSync(password, user?.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    },
  });
};

module.exports = login;
