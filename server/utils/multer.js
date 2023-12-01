const { diskStorage } = require('multer');
const { extname } = require('path');
const multer = require('multer');

const upload = multer({
    storage: diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = extname(file.originalname);
        if (ext !== '.pdf' && ext !== '.doc' && ext !== '.docx' &&  ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.svg') {
            cb(new Error('File type is not supported'), false);
            return;
        }
        cb(null, true);
    }
})

module.exports = upload;