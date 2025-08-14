const express = require('express')
const episodesController = require('../controller/videoController')
const videoRouter = express.Router()
const authMiddleware = require('../middleware/loginMiddleware')
const { upload, uploadFileToS3 } = require('../middleware/uploadS3');


// Rota para exibir a página de episódios
videoRouter.get('/episodios', episodesController.index)

// Rota para exibir a página de um episódio
videoRouter.get('/episodio/:id', episodesController.getEpisode)

// Rota para exibir a página de administração
videoRouter.get('/admin', authMiddleware, episodesController.getAdminPage)

// Rota para postar um novo vídeo
videoRouter.post(
  '/admin/postar',
  upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'img', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const videoUrl = req.files.video
        ? await uploadFileToS3(req.files.video[0])
        : null;

      const imgUrl = req.files.img
        ? await uploadFileToS3(req.files.img[0])
        : null;

      // Passa as URLs para o controller
      req.body.videoUrl = videoUrl;
      req.body.imgUrl = imgUrl;

      await episodesController.postVideo(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro no upload' });
    }
  }
);

// Rota para modificar o post
videoRouter.put('/episodio/:id', upload.fields([
    { name: 'video', maxCount: 1 }, // Um vídeo
    { name: 'img', maxCount: 1 }     // Uma imagem
]), episodesController.updateEpisode)

// Rota para deletar o post
videoRouter.delete('/episodio/:id', episodesController.deleteEpisode)

//Rota para editar o episódio
videoRouter.get('/episodio/:id/editar', episodesController.getEditEpisode)


module.exports = videoRouter