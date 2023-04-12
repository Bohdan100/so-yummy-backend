const { User } = require("../../models");

const getCurrentUser = async (req, res) => {
  const { email } = req.user;

  const user = await User.findOne({ email });

  return res.json({
    status: "success",
    code: 200,
    data: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      userId: user._id,
    },
  });
};

module.exports = getCurrentUser;
