const express = require('express')
const createPost = require('../controller/newsController')
const newsRouter = express.Router()

newsRouter.get('/editor', createPost.getEditor)

newsRouter.post('/edit', createPost.submitPost) // Rota para o formulário

newsRouter.get('/noticias', createPost.getNoticias)

module.exports = newsRouter