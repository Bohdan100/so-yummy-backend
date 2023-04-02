const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const subscribeSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    strIngredient: {
      type: String,
      require: true,
    },
    weight: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    recipeId: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

subscribeSchema.post("save", MongooseError);

const Subscribe = model("subscribe", subscribeSchema);

module.exports = Subscribe;
