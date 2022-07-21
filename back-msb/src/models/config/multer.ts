import multer, { Options } from "multer";
import path from 'path';
import crypto from 'crypto';


export const multerConfig: Options = {
  dest: path.resolve(__dirname,'..', 'store'),
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname,'..', 'store'))
    },
    filename(req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, file.filename);
        
        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, fileName)

      })        
    },
  }),
  limits: {
    fileSize: 500 * 1024,
  },
  fileFilter: (req, file, cb) => {

    const formats = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'application/vnd.oasis.opendocument.text',
      'text/plain'
    ];
    
    if (formats.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('format not accepted'));
    }
  }
}