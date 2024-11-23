const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: 'dpm1w0c8o',
    api_key: '517456432589784',
    api_secret: '_ix1uOI2rde7-PoyRGguQnhQO8A',
})

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  
    return result;
  }
  
  const upload = multer({ storage });
  
  module.exports = { upload, imageUploadUtil };