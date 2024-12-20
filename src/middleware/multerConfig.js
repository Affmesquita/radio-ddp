const multer = require('multer')
const path = require('node:path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            // Diretório para vídeos
            cb(null, path.join(__dirname, '../../public/update-videos')); 
        } else if (file.mimetype.startsWith('image/')) {
            // Diretório para imagens
            cb(null, path.join(__dirname, '../../public/update-images')); 
        } else {
            cb(new Error('Tipo de arquivo não suportado'), false);
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