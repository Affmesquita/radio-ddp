const express = require('express')
const loginRouter = express.Router()
const loginController = require('../controller/loginController')


loginRouter.get('/showLoginForm', loginController.showLoginForm)

loginRouter.post('/login', loginController.login)

module.exports = loginRouter