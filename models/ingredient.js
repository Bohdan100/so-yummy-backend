const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const ingrSchema = new Schema(
  {
    ttl: String,
    desc: String,
    t: String,
    thb: String,
  },
  { versionKey: false }
);

ingrSchema.post("save", MongooseError);

const Ingredient = model("ingredient", ingrSchema);

module.exports = { Ingredient };
