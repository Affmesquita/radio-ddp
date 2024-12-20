require('dotenv').config()
const USERNAME = process.env.USERNAME
const PASSWORD_HASH = process.env.PASSWORD_HASH
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    USERNAME,
    PASSWORD_HASH,
    SECRET_KEY
}
