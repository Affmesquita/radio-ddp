const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const mime = require('mime-types');

dotenv.config();

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    contentType: (req, file, cb) => {
      const contentType = mime.lookup(file.originalname) || 'application/octet-stream';
      cb(null, contentType);
    },
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const filename = Date.now().toString() + '-' + file.originalname;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 3 * 1024 * 1024 * 1024 }
});

module.exports = { upload };