const bcrypt = require('bcrypt');

const password = '14072000DDP'; // Defina aqui a sua senha
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Hash gerado:', hash); // O hash gerado será exibido aqui
});