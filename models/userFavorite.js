const { Schema, model } = require('mongoose');
const { MongooseError } = require('../helpers');

const userFavoriteSchema = Schema(
  {
    recipe: {
      type: Schema.Types.ObjectId,
      ref: 'recipe',
      required: [true, 'Recipe is required'],
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'User id is required'],
    },
  },
  { versionKey: false }
);

userFavoriteSchema.post('save', MongooseError);

const UserFavorite = model('userfavorite', userFavoriteSchema);

module.exports = UserFavorite;
