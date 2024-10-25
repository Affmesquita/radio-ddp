const express = require('express')
const episodesController = require('../controller/videoController')
const videoRouter = express.Router()
const storage = require("../middleware/multerConfig")
const upload = multer({ storage: storage })


// Rota para exibir a página de episódios
videoRouter.get('/episodios', episodesController.index)

// Rota para exibir a página de administração
videoRouter.get('/admin', episodesController.getAdminPage)

// Rota para postar um novo vídeo
videoRouter.post('/admin/postar', upload.single('video'), episodesController.postVideo)

videoRouter.get('/episodio/:id', async (req, res) => {
    const episodio = await Video.findById(req.params.id)
    if (!episodio) {
        return res.status(404).send('Episódio não encontrado')
    }
    res.render('episodio', { episodio })
})

module.exports = videoRouter