
const bcrypt = require('bcrypt')
const password = 'teucu' // Defina aqui a sua senha
const saltRounds = 10
bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
        console.error(err)
        return
    }
    console.log('Hash gerado:', hash)
})
