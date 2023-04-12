const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { nanoid } = require("nanoid");
const { HttpError } = require("../helpers");

const USER_RECIPE_PIC_PARAMS = {
  dimensions: {
    width: 280,
    height: 270,
  },
  maxFileSize: 1000000,
  acceptableFileTypes: ["jpg", "jpeg", "png"],
};
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storageRecipe = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const { _id } = req.user;
    console.log("_id", _id);
    const imgID = nanoid(5);
    const recipeName = `${_id}_${imgID}_recipe`;
    return {
      folder: "assets/own_recipes_photos",
      allowed_formats: USER_RECIPE_PIC_PARAMS.acceptableFileTypes,
      public_id: recipeName,
      transformation: [
        {
          height: USER_RECIPE_PIC_PARAMS.dimensions.height,
          width: USER_RECIPE_PIC_PARAMS.dimensions.width,
          crop: "fill",
        },
      ],
    };
  },

  filename: (req, file, cb) => {
    console.log("storageRecipe", file);
    cb(null, file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    console.log("fileFilter", file.mimetype);
    cb(null, true);
  } else {
    cb(
      HttpError(
        415,
        "Unsupported image format. Choose file with extention jpeg or png"
      )
    );
  }
}

const uploadCloud = multer({ storage: storageRecipe, fileFilter });

module.exports = { uploadCloud: uploadCloud.single("preview") };
