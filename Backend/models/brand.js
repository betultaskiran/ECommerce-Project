const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
  },
});

module.exports = mongoose.model("Brand", brandSchema);
