const multer = require('multer')
const path = require('node:path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'video') {
            cb(null, path.join(__dirname, '../../public/update-videos'))
        } else if (file.fieldname === 'img') {
            cb(null, path.join(__dirname, '../../public/update-images'))
        } else {
            cb(new Error('Campo de arquivo desconhecido'), false)
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    const videoTypes = ['video/mp4', 'video/webm', 'video/ogg']
    const imageTypes = ['image/jpeg', 'image/png', 'image/webp']

    if (file.fieldname === 'video' && videoTypes.includes(file.mimetype)) {
        cb(null, true)
    } else if (file.fieldname === 'img' && imageTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error('Tipo de arquivo não suportado'), false)
    }
}


// Criar a instância do multer com a configuração de armazenamento
const upload = multer({ storage, fileFilter, 
    limits: { fileSize: 10 * 1024 * 1024 * 1024 }})

// Exportar a instância do multer
module.exports = upload
