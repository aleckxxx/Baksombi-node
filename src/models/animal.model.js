const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const animalSchema = mongoose.Schema(
  {
    order: {
      type: Number,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
      trim: true,
    },
    enName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    frName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    enFood: {
      type: String,
      required: true,
      trim: true,
    },
    frFood: {
      type: String,
      required: true,
      trim: true,
    },
    enHome: {
      type: String,
      required: true,
      trim: true,
    },
    frHome: {
      type: String,
      required: true,
      trim: true,
    },
    enReproduction: {
      type: String,
      required: true,
      trim: true,
    },
    frReproduction: {
      type: String,
      required: true,
      trim: true,
    },
    enWikipediaURL: {
      type: String,
      required: true,
      trim: true,
    },
    frWikipediaURL: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Check if name is taken
 * @param {string} name - The user's name
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
animalSchema.statics.isNameTaken = async function (name, excludeUserId) {
  const category = await this.findOne({ enName: name, frName: name, _id: { $ne: excludeUserId } });
  return !!category;
};

animalSchema.plugin(toJSON);
animalSchema.plugin(paginate);

/**
 * @typedef Animal
 */
const Animal = mongoose.model('Animal', animalSchema, 'Animal');

module.exports = Animal;
