const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'index.html'))
})


router.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'sobre.html'))
})



module.exports = router