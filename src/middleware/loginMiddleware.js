const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config/config')

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token // Acessa o token do cookie
    console.log('Token recebido:', token)
        if (!token) {
            return res.status(401).send('Token não fornecido')
        }
    
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Token inválido')
        }
        req.user = decoded
        next()
    })
}

module.exports = authMiddleware