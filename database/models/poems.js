const mongoose = require('mongoose');

const poemSchema = mongoose.Schema(
  {
    poem: {
      type: String,
      required: true,
    },
  }, {
    id: false,
    toObject: {
      virtuals: true,
      getters: true,
    },
    toJSON: {
      virtuals: true,
      getters: true,
      setters: false,
    },
    timestamps: true,
  },
);

const Poem = mongoose.model('poem', poemSchema);
module.exports = Poem;
