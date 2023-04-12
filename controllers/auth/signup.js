const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { HttpError } = require('../../helpers');
const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({ name, email, password: hashPassword });

  const newUser = await User.findOne({ email });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  newUser.token = token;
  await newUser.save();

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      token,
      user: {
        name,
        email,
        avatar: newUser.avatar,
        userId: newUser._id,
      },
    },
  });
};

module.exports = signup;
