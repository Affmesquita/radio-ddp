const express = require('express')
const liveRoutes = express.Router()
const path = require('node:path')


liveRoutes.get('/api/stream-url', (req, res) => {
    const streamUrl = 'http://localhost/live/stream' // URL do seu stream
    res.json({ url: streamUrl })
})
// rtmp://localhost/live //

liveRoutes.get('/live', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'live.html'))
})


module.exports = liveRoutes




/*
liveRoutes.get('/live', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'live.html'))
})
*/
