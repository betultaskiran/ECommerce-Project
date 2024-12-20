const Product = require("../models/product");

const productService = {
  createProduct: async (productData) => {
    // const { productName, description, price, stock, category, image } =
    //   productData;
    const newProduct = new Product(productData);
    return await newProduct.save();
  },

  updateProduct: async (productData) => {
    const { id, productName, description, price, stock, category, image } =
      productData;
    return await Product.findByIdAndUpdate(
      id,
      { productName, description, price, stock, category, image },
      { new: true }
    );
  },

  deleteProduct: async (params) => {
    const { id } = params;
    return await Product.findByIdAndDelete(id);
  },

  getProduct: async (params) => {
    const { id } = params;
    return await Product.findById(id);
  },

  getProducts: async () => {
    return await Product.find();
  },
};

module.exports = productService;
