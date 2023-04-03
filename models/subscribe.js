const { Schema, model } = require("mongoose");
const { MongooseError } = require("../helpers");

const emailRegexp = /^\S+@\S+\.\S+$/;

const subscribeSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { versionKey: false }
);

subscribeSchema.post("save", MongooseError);

const Subscribe = model("subscribe", subscribeSchema);

module.exports = Subscribe;
