const mongoose = require("mongoose");
const category = require("./category");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  productName: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // Category modeline referans
    ref: "Category", // Category modelini burada referans alıyoruz
  },
});

module.exports = mongoose.model("Product", productSchema);
