const Category = require("../models/category");

const categoryService = {
  createCategory: async (categoryData) => {
    const { categoryName } = categoryData;
    const newCategory = new Category({ categoryName });
    return await newCategory.save();
  },

  updateCategory: async (categoryData) => {
    const { _id, categoryName } = categoryData;
    return await Category.findByIdAndUpdate(
      _id,
      { categoryName },
      { new: true }
    );
  },

  deleteCategory: async (params) => {
    const { id } = params;
    return await Category.findByIdAndDelete(id);
  },

  getCategory: async (params) => {
    const { id } = params;
    return await Category.findById(id);
  },

  getCategories: async () => {
    return await Category.find();
  },
};

module.exports = categoryService;
