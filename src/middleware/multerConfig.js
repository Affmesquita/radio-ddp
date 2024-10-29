const multer = require('multer')
const path = require('node:path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../videos'))
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

module.exports = storage