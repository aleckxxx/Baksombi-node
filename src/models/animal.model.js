const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const animalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    imageURL: {
      type: String,
      required: true,
      trim: true,
    },
    food: {
      type: String,
      required: true,
      trim: true,
    },
    home: {
      type: String,
      required: true,
      trim: true,
    },
    ovipare: {
      type: String,
      required: true,
      trim: true,
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
  const category = await this.findOne({ name, _id: { $ne: excludeUserId } });
  return !!category;
};

animalSchema.plugin(toJSON);
animalSchema.plugin(paginate);

/**
 * @typedef Animal
 */
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
