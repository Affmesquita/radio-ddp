const multer = require('multer')
const path = require('node:path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            cb(null, path.join(__dirname, '../videos')) // Diretório para vídeos
        } else if (file.mimetype.startsWith('image/')) {
            cb(null, path.join(__dirname, '../../public/image')) // Diretório para imagens
        } else {
            cb(new Error('Tipo de arquivo não suportado'), false)
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// Criar a instância do multer com a configuração de armazenamento
const upload = multer({ storage })

// Exportar a instância do multer
module.exports = upload