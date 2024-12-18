const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { PASSWORD_HASH, SECRET_KEY } = require('../config/config')



const loginController = {

    // GET index
    showLoginForm: (req, res) => {
        const error = req.query.error || null // Captura a mensagem de erro da query string
        res.render('login', { error }) // Passa a variável error para a view
    },

    //  login   
    login: (req, res) => {
        const { password } = req.body; // A senha que o usuário forneceu

        // Verifica se a senha fornecida corresponde ao hash armazenado
        bcrypt.compare(password, PASSWORD_HASH, (err, result) => {
            if (err) {
                // Se ocorrer um erro, você pode enviar uma resposta de erro
                return res.status(500).send('Erro interno do servidor');
            }
            if (result) {
                // A senha está correta
                const token = jwt.sign({ username: 'diabo' }, SECRET_KEY, { expiresIn: '1h' });

                // Você pode armazenar o token em um cookie ou no armazenamento local do navegador
                // Para fins de redirecionamento, você pode enviar o token em um cookie
                res.cookie('token', token, { httpOnly: true }); // Armazena o token em um cookie

                // Redireciona para a página do administrador
                return res.redirect('/admin'); // Redireciona para a página do administrador
            } else {
                // A senha está incorreta
                return res.redirect('/login?error=Credenciais inválidas'); // Redireciona para a página de login com mensagem de erro
            }
        });
    }

}

module.exports = loginController