// authMiddleware.js
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; // O token geralmente é enviado no cabeçalho 'Authorization'

    if (!token) {
        return res.status(401).send('Token não fornecido');
    }

    const bearerToken = token.split(' ')[1];

    jwt.verify(bearerToken, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Token inválido');
        }
        req.user = decoded; // Armazena as informações decodificadas do token na requisição
        next(); // Chama o próximo middleware ou a rota
    });
};

module.exports = authMiddleware;