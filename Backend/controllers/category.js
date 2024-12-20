const categoryService = require("../services/category");

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const response = await categoryService.createCategory(req.body);
      res.status(201).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res
        .status(500)
        .send({ error: "Kategori oluşturulurken bir hata oluştu" });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const response = await categoryService.updateCategory(req.body);
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res
        .status(500)
        .send({ error: "Kategori güncellenirken bir hata oluştu" });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const response = await categoryService.deleteCategory(req.params);
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Kategori silinirken bir hata oluştu" });
    }
  },

  getCategory: async (req, res) => {
    try {
      const response = await categoryService.getCategory(req.params);
      console.log(response, "result");
      if (!response) {
        return res.status(404).send({ error: "Kategori bulunamadı" });
      }
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res.status(500).send({ error: "Kategori getirilirken bir hata oluştu" });
    }
  },

  getCategories: async (req, res) => {
    try {
      const response = await categoryService.getCategories();
      console.log(response, "result");
      res.status(200).send({ success: true, response });
    } catch (e) {
      console.log(e, "error");
      res
        .status(500)
        .send({ error: "Kategoriler getirilirken bir hata oluştu" });
    }
  },
};

module.exports = categoryController;
