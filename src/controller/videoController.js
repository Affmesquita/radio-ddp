const multer = require('multer')
const Video = require('../models/videoModel')




const episodesController = {
    // GET /episódios
    index: async (req, res) => {
        const episodios = await Video.find() // Recupera todos os vídeos do banco de dados
        res.render('episodios', { episodios }) // Corrigido o caminho da view
    },

    getAdminPage: (req, res) => {
        res.render('admin')
    },

    postVideo: async (req, res) => {
        try {
            const novoVideo = new Video({
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                videoUrl: req.file.path // Caminho do vídeo
            })
            await novoVideo.save() // Salva o novo vídeo no banco de dados
            res.redirect('/episodios') // Redireciona para a página de episódios
        } catch (error) {
            console.error('Erro ao salvar o vídeo:', error)
            res.status(500).send('Erro ao salvar o vídeo.')
        }
    },
}

module.exports = episodesController


