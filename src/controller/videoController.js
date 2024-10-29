const Video = require('../models/videoModel')
const path = require('node:path')


const episodesController = {
    // GET /episódios
    index: async (req, res) => {
        const episodios = await Video.find() // Recupera todos os vídeos do banco de dados
        res.render('episodios', { episodios }) // Corrigido o caminho da view
    },

    getAdminPage: async (req, res) => {
        const episodios = await Video.find(); // Recupera todos os vídeos do banco de dados
        res.render('admin-video', { episodios }); // Passa a lista de episódios para a view
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

    updateEpisode: async (req, res) => {
        const episodioId = req.params.id; // Obtém o ID do episódio a partir da URL
        const { titulo, descricao, videoUrl, imgUrl } = req.body; // Obtém os novos dados do corpo da requisição
    
        try {
            const episodioAtualizado = await Video.findByIdAndUpdate(
                episodioId,
                { titulo, descricao, videoUrl, imgUrl }, // Atualiza os campos desejados
                { new: true } // Retorna o documento atualizado
            );
    
            if (episodioAtualizado) {
                // Redireciona para a página de administração após a atualização
                res.redirect('/admin/video'); // Certifique-se de que esta rota está correta
            } else {
                res.status(404).send({ message: 'Episódio não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao atualizar episódio:', error);
            res.status(500).send({ message: 'Erro ao atualizar episódio.' });
        }
    },

    deleteEpisode: async (req, res) => {
        const episodioId = req.params.id // Obtém o ID do episódio a partir da URL
        try {
            const resultado = await Video.findByIdAndDelete(episodioId);
            if (resultado) {
                res.status(200).send({ message: 'Episódio deletado com sucesso!' });
            } else {
                res.status(404).send({ message: 'Episódio não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao deletar episódio:', error);
            res.status(500).send({ message: 'Erro ao deletar episódio.' });
        }
    }
}

module.exports = episodesController


