const Video = require('../models/videoModel')
const path = require('node:path')
const fs = require('fs');


const episodesController = {
    // GET /episódios
    index: async (req, res) => {
        const episodios = await Video.find() // Recupera todos os vídeos do banco de dados
        res.render('episodios', { episodios }) // Corrigido o caminho da view
    },

    getAdminPage: async (req, res) => {
        const episodios = await Video.find() // Recupera todos os vídeos do banco de dados
        res.render('admin-video', { episodios }) // Passa a lista de episódios para a view
    },

    postVideo: async (req, res) => {
        try {

            const videoUrl = `/update-videos/${req.files['video'][0].filename}`; // Caminho relativo do vídeo
            const imgUrl = req.files['img'] ? `/update-images/${req.files['img'][0].filename}` : null // Caminho relativo da imagem

            const novoVideo = new Video({
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                videoUrl: videoUrl, // Caminho absoluto do vídeo
                imgUrl: imgUrl // Caminho relativo da imagem 
            })

            console.log('Caminho da imagem:', novoVideo.imgUrl) // Verifique o caminho da imagem
            console.log('Caminho do video:', novoVideo.videoUrl) // Verifique o caminho do video

            await novoVideo.save() // Salva o novo vídeo no banco de dados
            res.redirect('/episodios') // Redireciona para a página de episódios
        } catch (error) {
            console.error('Erro ao salvar o vídeo:', error)
            res.status(500).send('Erro ao salvar o vídeo.')
        }
    },

    getEpisode: async (req, res) => {
        const episodioId = req.params.id // Obtém o ID do episódio a partir da URL
        try {
            const episodio = await Video.findById(episodioId)
            if (!episodio) {
                return res.status(404).send('Episódio não encontrado')
            }
            res.render('episodio', { episodio })
        } catch (error) {
            console.error('Erro ao buscar episódio:', error)
            res.status(500).send('Erro ao buscar episódio.')
        }
    },

    updateEpisode: async (req, res) => {
        const episodioId = req.params.id // Obtém o ID do episódio a partir da URL
    
        // Obtém os novos dados do corpo da requisição
        const { titulo, descricao } = req.body
    
        // Cria um objeto para atualizar
        const updateData = {}
    
        // Adiciona os campos que foram enviados
        if (titulo) {
            updateData.titulo = titulo // Atualiza o título se foi enviado
        }
        if (descricao) {
            updateData.descricao = descricao // Atualiza a descrição se foi enviada
        }
        if (req.files) {
            if (req.files['video'] && req.files['video'][0]) {
                updateData.videoUrl = req.files['video'][0].path // Atualiza o vídeo se foi enviado
            }
            if (req.files['img'] && req.files['img'][0]) {
                updateData.imgUrl = req.files['img'][0].path // Atualiza a imagem se foi enviada
            }
        }
    
        try {
            const episodioAtualizado = await Video.findByIdAndUpdate(
                episodioId,
                updateData, // Usa o objeto de atualização
                { new: true }
            )
    
            if (episodioAtualizado) {
                res.redirect(`/episodio/${episodioId}`) // Redireciona para a página do episódio atualizado
            } else {
                res.status(404).send({ message: 'Episódio não encontrado.' })
            }
        } catch (error) {
            console.error('Erro ao atualizar episódio:', error)
            res.status(500).send({ message: 'Erro ao atualizar episódio.' })
        }
    },

    deleteEpisode: async (req, res) => {
        const episodioId = req.params.id // Obtém o ID do episódio a partir da URL
        try {
            const resultado = await Video.findByIdAndDelete(episodioId)
            if (resultado) {
                res.status(200).send({ message: 'Episódio deletado com sucesso!' })
            } else {
                res.status(404).send({ message: 'Episódio não encontrado.' })
            }
        } catch (error) {
            console.error('Erro ao deletar episódio:', error)
            res.status(500).send({ message: 'Erro ao deletar episódio.' })
        }
    },

    getEditEpisode: async (req, res) => {
        const episodioId = req.params.id // Obtém o ID do episódio a partir da URL
        try {
            const episodio = await Video.findById(episodioId)
            if (!episodio) {
                return res.status(404).send('Episódio não encontrado')
            }
            res.render('edit-episode', { episodio }) // Renderiza a página de edição
        } catch (error) {
            console.error('Erro ao buscar episódio:', error)
            res.status(500).send('Erro ao buscar episódio.')
        }

            
    }
}

module.exports = episodesController





/* 
deleteEpisode: async (req, res) => {
        const episodioId = req.params.id // Obtém o ID do episódio a partir da URL
        try {
            const resultado = await Video.findByIdAndDelete(episodioId)
            if (resultado) {
                res.status(200).send({ message: 'Episódio deletado com sucesso!' })
            } else {
                res.status(404).send({ message: 'Episódio não encontrado.' })
            }
        } catch (error) {
            console.error('Erro ao deletar episódio:', error)
            res.status(500).send({ message: 'Erro ao deletar episódio.' })
        }
    },
*/