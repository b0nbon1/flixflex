import multer from 'multer';
import fs from 'fs';
import ErrorHandler from '../utils/error';

/**
 * Files service
 */
const fileService = {
  /**
  * @param {String} field
  * @param {String} folderName
  * @param {String} sizeLimit
  * @param {Array} accept accepted file formats
  * @param {String} uploadErrorMessage Error message
  * @returns {object} file
  */
  upload(field, folderName, sizeLimit, accept, uploadErrorMessage) {
    const dir = `public/${folderName}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, `public/${folderName}`);
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
      onError: (err, next) => next(err)
    });

    const fileFilter = (req, file, cb) => {
      if (accept.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new ErrorHandler(uploadErrorMessage, 422));
      }
    };
    return multer({
      limits: { fieldSize: sizeLimit * 1024 * 1024 },
      storage,
      fileFilter,
    }).array(field);
  }
};

export default fileService;
