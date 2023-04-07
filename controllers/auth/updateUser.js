const { User } = require('../../models');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const avatarURL = req.file?.path;

  const user = await User.findById({ _id });

  if (!avatarURL) {
    user.name = req.body.name;
    user.save();

    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          name: req.body.name,
          avatar: user.avatar,
        },
      },
    });
  } else {
    user.name = req.body.name;
    user.avatar = avatarURL;
    user.save();

    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          name: req.body.name,
          avatar: avatarURL,
        },
      },
    });
  }
};

module.exports = updateUser;
