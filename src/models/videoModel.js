const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    imgUrl: { 
        type: String,
        required: true, 
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
    },
})

const Video = mongoose.model('Video', videoSchema)

module.exports = Video