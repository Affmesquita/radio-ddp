const express = require('express')
const newsRouter = express.Router()

newsRouter.get('/editor', (req, res) => {
    res.render('editor')
})

module.exports = newsRouter