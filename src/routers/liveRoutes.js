const express = require('express')
const liveRoutes = express.Router()
const path = require('node:path')
const { createProxyMiddleware } = require('http-proxy-middleware')

/*
liveRoutes.get('/api/stream-url', (req, res) => {
    const streamUrl = 'http://localhost/live/stream' // URL do seu stream
    res.json({ url: streamUrl })
}),
*/
// rtmp://localhost/live //

liveRoutes.get('/live', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'live.html'))
})

liveRoutes.use('/live', createProxyMiddleware({
    target: 'http://localhost:1935/live/radio_ddp.m3u8', // URL do servidor RTMP
    changeOrigin: true,
    pathRewrite: {
        '^/live': '/live', // Reescreve o caminho se necessário
    },
}));


module.exports = liveRoutes




/*
liveRoutes.get('/live', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'live.html'))
})
*/
