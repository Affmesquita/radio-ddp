const express = require('express')
const episodesController = require('../controller/videoController')
const videoRouter = express.Router()
const upload = require("../middleware/multerConfig")



// Rota para exibir a página de episódios
videoRouter.get('/episodios', episodesController.index)

// Rota para exibir a página de um episódio
videoRouter.get('/episodio/:id', episodesController.getEpisode)

// Rota para exibir a página de administração
videoRouter.get('/admin', episodesController.getAdminPage)

// Rota para postar um novo vídeo
videoRouter.post('/admin/postar', upload.fields([
    { name: 'video', maxCount: 1 }, // Um vídeo
    { name: 'img', maxCount: 1 }     // Uma imagem
]), episodesController.postVideo)

// Rota para modificar o post
videoRouter.put('/episodio/:id', episodesController.updateEpisode)

// Rota para deletar o post
videoRouter.delete('/episodio/:id', episodesController.deleteEpisode)



module.exports = videoRouter