const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    enum: ["skincare", "makeup", "parfume"],
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
