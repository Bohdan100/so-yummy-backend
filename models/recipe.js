const { Schema, model } = require('mongoose');

const { MongooseError } = require('../helpers');

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set name for recipe'],
    },
    category: {
      type: String,
      required: [true, 'Set category for recipe'],
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
      required: [true, 'Write instructions for recipe'],
    },
    description: {
      type: String,
      default: '',
      required: [true, 'Add information about recipe'],
    },
    thumb: {
      type: String,
    },
    preview: {
      type: String,
    },
    time: {
      type: String,
      required: [true, 'Add time for cooking recipe'],
      default: '',
    },
    popularity: {
      type: Number,
      default: 0,
    },
    favorites: {
      type: [Schema.Types.ObjectId],
      ref: 'user',
      default: [],
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: 'user',
      default: [],
    },
    youtube: {
      type: String,
      default: '',
    },
    tags: {
      type: [String],
      default: [],
    },
    ingredients: {
      _id: false,
      type: [
        {
          id: {
            type: Schema.Types.ObjectId,
            ref: 'ingredient',
            required: true,
          },
          measure: {
            type: String,
            default: '',
          },
        },
      ],
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

recipeSchema.post('save', MongooseError);

const Recipe = model('recipe', recipeSchema);

module.exports = { Recipe };
