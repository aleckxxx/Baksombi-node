const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const categorySchema = mongoose.Schema(
  {
    imgURL: {
      type: String,
      required: true,
    },
    enName: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    frName: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    animals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
      },
    ],
  },
  {
    timestamps: true,
  }
);

categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
