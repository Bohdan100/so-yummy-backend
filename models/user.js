const { Schema, model } = require('mongoose');

const path = require('path');
const { MongooseError } = require(path.join(__dirname, '..', 'helpers'));

const emailRegexp = /^\S+@\S+\.\S+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', MongooseError);

const User = model('user', userSchema);

module.exports = User;
