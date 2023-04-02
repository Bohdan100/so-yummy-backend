const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const path = require("path");
const { MongooseError } = require(path.join(__dirname, "..", "helpers"));

const emailRegexp = /^\S+@\S+\.\S+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10));
  }
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.post("save", MongooseError);

const User = model("user", userSchema);

module.exports = User;
