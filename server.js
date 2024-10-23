const express = require('express')
const path = require('node:path')
const staticRoutes = require('./src/routers/staticRoutes')
const liveRoutes = require('./src/routers/liveRoutes')

const app = express()

// SETTINGS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join('public')))

// ROTAS
app.use(liveRoutes)
app.use(staticRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`SERVER DDP ON http://localhost:3000/home`))
//        node server.js        //  