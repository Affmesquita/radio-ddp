const jwt = require('jsonwebtoken')

const { USERNAME, PASSWORD_HASH, SECRET_KEY } = require('./config');

const loginController = {

    // GET index
    showLoginForm: (req, res) => {
        res.render('login')
    },

    //  login   
    login: (req, res) => {
        const { username, password } = req.body

        if (username === USERNAME && password === PASSWORD_HASH) {
            // Cria um token
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' }) // O token expira em 1 hora
            res.json({ token })
        } else {
            res.status(401).send('Credenciais inválidas')
        }
    }

}

module.exports = loginController