// src/controllers/newsController.js
const newsPost = require("../models/newsModel");


let posts = []; // Array para armazenar os posts


const createPost = {

    getEditor:  (req, res) => {
        res.render('editor');
    },

    submitPost:  (req, res) => {
        const { titulo, texto, foto } = req.body;
        const novoPost = new Post(titulo, texto, foto);
        posts.push(novoPost); // Adiciona o novo post ao array
        res.redirect('/noticias'); // Redireciona para a página de notícias
    },

    getNoticias: (req, res) => {
        res.render('noticias', { newsPost }); // Passa os posts para a página de notícias
    }

}

module.exports = createPost