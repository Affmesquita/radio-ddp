const Video = require('../models/videoModel')
const path = require('node:path')


const episodesController = {
    // GET /episódios
    index: async (req, res) => {
        const episodios = await Video.find() // Recupera todos os vídeos do banco de dados
        res.render('episodios', { episodios }) // Corrigido o caminho da view
    },

    getAdminPage: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/html/admin-video.html'))
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

    getEpisode: async (req, res) => {
        const episodio = await Video.findById(req.params.id)
        if (!episodio) {
            return res.status(404).send('Episódio não encontrado')
        }
        res.render('episodio', { episodio })
    },
}

module.exports = episodesController


