const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const refresh = async (req, res) => {
  const { token } = req.body;
  const user = await User.findOne({ token });

  if (!user) {
    throw HttpError(401, "Invalid token");
  }

  const payload = {
    id: user._id,
  };
  const newToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  await User.findByIdAndUpdate(user._id, { newToken });

  return res.json({
    status: "success",
    code: 200,
    data: {
      token: newToken,
      user: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        userId: user._id,
      },
    },
  });
};

module.exports = refresh;
