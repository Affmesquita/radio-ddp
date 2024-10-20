const express = require('express')
const path = require('node:path')
const route  = require('./src/routers/staticRoutes')
const newsRouter = require('./src/routers/newsRoutes')
const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views', 'ejs'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join('public')))


app.use(route)
app.use(newsRouter)

const PORT = 3000
app.listen(PORT, console.log('SERVER DDP ON http://localhost:3000/home'))
//        node server.js        // 