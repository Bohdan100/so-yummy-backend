const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const shoppingListSchema = new Schema(
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
    },
    recipeId: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

shoppingListSchema.post("save", MongooseError);

const ShoppingList = model("shoppinglist", shoppingListSchema);

module.exports = ShoppingList;
