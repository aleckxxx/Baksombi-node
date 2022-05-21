const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
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
categorySchema.statics.isNameTaken = async function (name, excludeUserId) {
  const category = await this.findOne({ name, _id: { $ne: excludeUserId } });
  return !!category;
};

categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
