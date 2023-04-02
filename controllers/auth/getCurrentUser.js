const getCurrentUser = async (req, res) => {
  const { email } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email,
      },
    },
  });
};

module.exports = getCurrentUser;
