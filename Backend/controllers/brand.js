const brandService = require("../services/brand");

const brandController = {
  createBrand: async (req, res) => {
    try {
      const response = await brandService.createBrand(req.body);
      res.status(201).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Marka oluşturulurken bir hata oluştu" });
    }
  },

  updateBrand: async (req, res) => {
    try {
      const response = await brandService.updateBrand(req.body);
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Marka güncellenirken bir hata oluştu" });
    }
  },

  deleteBrand: async (req, res) => {
    try {
      const response = await brandService.deleteBrand(req.params);
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Marka silinirken bir hata oluştu" });
    }
  },

  getBrand: async (req, res) => {
    try {
      const response = await brandService.getBrand(req.params);
      if (!response) {
        return res.status(404).send({ error: "Marka bulunamadı" });
      }
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Marka getirilirken bir hata oluştu" });
    }
  },

  getBrands: async (req, res) => {
    try {
      const response = await brandService.getBrands();
      console.log(response, "result");
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Markalar getirilirken bir hata oluştu" });
    }
  },
};

module.exports = brandController;
