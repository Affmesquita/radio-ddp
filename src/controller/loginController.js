const jwt = require('jsonwebtoken')

const { USERNAME, PASSWORD_HASH, SECRET_KEY } = require('../config/config')

const loginController = {

    // GET index
    showLoginForm: (req, res) => {
        const error = req.query.error || null // Captura a mensagem de erro da query string
        res.render('login', { error }) // Passa a variável error para a view
    },

    //  login   
    login: (req, res) => {
        const { username, password } = req.body
        if (username === USERNAME && password === PASSWORD_HASH) {
            // Cria um token
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' }) // O token expira em 1 hora
            res.json({ token })
            res.redirect('edit-episode')
        } else {
            // Redireciona para a página de login com uma mensagem de erro
            return res.redirect('/login?error=Credenciais inválidas')
        }
    }

}

module.exports = loginController