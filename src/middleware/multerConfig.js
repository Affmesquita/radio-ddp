const multer = require('multer')
const path = require('node:path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cd(null, path.join(__dirname, './videos'))
    },

    filename: (req, file, cd) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

module.exports = storage