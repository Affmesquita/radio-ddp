const express = require('express')
const episodesController = require('../controller/videoController')
const videoRouter = express.Router()
const storage = require("../middleware/multerConfig")
const multer = require('multer')
const upload = multer({ storage: storage })


// Rota para exibir a página de episódios
videoRouter.get('/episodios', episodesController.index)

// Rota para exibir a página de um episódio
videoRouter.get('/episodio/:id', episodesController.getEpisode)

// Rota para exibir a página de administração
videoRouter.get('/admin', episodesController.getAdminPage)

// Rota para postar um novo vídeo
videoRouter.post('/admin/postar', upload.single('video'), episodesController.postVideo)

// Rota para modificar o post
videoRouter.put('/episodio/:id', episodesController.updateEpisode)

// Rota para deletar o post
videoRouter.delete('/episodio/:id', episodesController.deleteEpisode)



module.exports = videoRouter