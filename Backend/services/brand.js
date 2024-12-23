const Brand = require("../models/brand");

const brandService = {
  createBrand: async (brandData) => {
    const { brandName } = brandData;
    const newBrand = new Brand({ brandName });
    return await newBrand.save();
  },

  updateBrand: async (brandData) => {
    const { _id, brandName } = brandData;
    return await Brand.findByIdAndUpdate(_id, { brandName }, { new: true });
  },

  deleteBrand: async (params) => {
    const { id } = params;
    return await Brand.findByIdAndDelete(id);
  },

  getBrand: async (params) => {
    const { id } = params;
    return await Brand.findById(id);
  },

  getBrands: async () => {
    return await Brand.find();
  },
};

module.exports = brandService;
