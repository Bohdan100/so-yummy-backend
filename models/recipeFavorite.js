const { Schema, model } = require('mongoose');
const { MongooseError } = require('../helpers');

const recipeFavoriteSchema = Schema(
  {
    recipeId: {
      type: String,
      required: [true, 'Recipe id is required'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

recipeFavoriteSchema.post('save', MongooseError);

const RecipeFavorite = model('recipeFavorite', recipeFavoriteSchema);

module.exports = RecipeFavorite;
