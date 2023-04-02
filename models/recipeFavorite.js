const { Schema, model } = require('mongoose');
const { MongooseError } = require('../helpers');

const recipeFavoriteSchema = Schema(
  {
    recipe: {
      type: Schema.Types.ObjectId,
      ref: 'recipe',
      required: [true, 'Recipe is required'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
    },
  },
  { versionKey: false }
);

recipeFavoriteSchema.post('save', MongooseError);

const RecipeFavorite = model('recipefavorite', recipeFavoriteSchema);

module.exports = RecipeFavorite;
