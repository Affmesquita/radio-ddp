const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { PASSWORD_HASH, SECRET_KEY } = require('../config/config')

const loginController = {
    showLoginForm: (req, res) => {
        const error = req.query.error || null
        res.render('login', { error })
    },
    login: (req, res) => {
        const { password } = req.body
        bcrypt.compare(password, PASSWORD_HASH, (err, result) => {
            if (err) {
                return res.status(500).send('Erro interno do servidor')
            }
            if (result) {
                const token = jwt.sign({ username: 'diabo' }, SECRET_KEY, { expiresIn: '1h' })
                res.cookie('token', token, { httpOnly: true })
                return res.redirect('/admin')
            } else {
                return res.redirect('/login?error=Credenciais inválidas')
            }
        })
    },
    logout: (req, res) => {
        // Remove o cookie do token
        res.cookie('token', '', { expires: new Date(0) });
        // Redireciona para a página de login
        res.redirect('/login');
    }
}

module.exports = loginController