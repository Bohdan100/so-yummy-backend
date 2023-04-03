const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const { nanoid } = require('nanoid');
const { HttpError } = require('../helpers');

const USER_AVATAR_PIC_PARAMS = {
  dimensions: {
    width: 280,
    height: 270,
  },
  maxFileSize: 1000000,
  acceptableFileTypes: ['jpg', 'jpeg', 'png'],
};
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storageAvatar = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const { _id } = req.user;
    const imgID = nanoid(5);
    const avatarName = `${_id}_${imgID}_recipe`;

    return {
      folder: 'assets/avatars_photos',
      allowed_formats: USER_AVATAR_PIC_PARAMS.acceptableFileTypes,
      public_id: avatarName,
      transformation: [
        {
          height: USER_AVATAR_PIC_PARAMS.dimensions.height,
          width: USER_AVATAR_PIC_PARAMS.dimensions.width,
          crop: 'fill',
        },
      ],
    };
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(HttpError(415, 'Unsupported image format. Choose file with extention jpeg or png'));
  }
}

const uploadCloud = multer({ storage: storageAvatar, fileFilter });

module.exports = { uploadCloud: uploadCloud.single('avatar') };
