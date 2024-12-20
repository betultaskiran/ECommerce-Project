const multer = require("multer");
const path = require("path");

// Yükleme dizinini ve dosya adını ayarlama
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Yüklenecek dosyaların kayıt edileceği dizin
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Benzersiz bir dosya adı oluştur
  },
});

// Yalnızca resim dosyalarını kabul etmek için filtreleme
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Yalnızca JPEG ve PNG formatındaki resimlere izin verilir"),
      false
    );
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
