const { User } = require('../../models');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const avatarURL = req.file?.path;

  await User.findByIdAndUpdate(_id, { name: req.body.name, avatar: avatarURL });

  res.json({
    status: 'success',
    data: {
      user: {
        name: req.body.name,
        avatar: avatarURL,
      },
    },
  });
};

module.exports = updateUser;
