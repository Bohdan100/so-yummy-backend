const { Schema, model } = require('mongoose');
const { MongooseError } = require('../helpers');

const userFavoriteSchema = Schema(
  {
    recipeId: {
      type: String,
      required: [true, 'Recipe id is required'],
    },

    userId: {
      type: String,
      required: [true, 'User id is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

userFavoriteSchema.post('save', MongooseError);

const UserFavorite = model('userfavorite', userFavoriteSchema);

module.exports = UserFavorite;
