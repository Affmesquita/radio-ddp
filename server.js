const express = require('express')
const path = require('node:path')
const staticRoutes = require('./src/routers/staticRoutes')
const liveRoutes = require('./src/routers/liveRoutes')
const videoRouter = require('./src/routers/videoRoutes')
const { connectToDatabase } = require('./src/config/db')
const methodOverride = require('method-override')
const loginRouter = require('./src/routers/loginRoutes')
const cookieParser = require('cookie-parser')

const app = express()


// SETTINGS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join('public')))
app.use(cookieParser())

// ROTAS
app.use(liveRoutes)
app.use(staticRoutes)
app.use(videoRouter)
app.use(loginRouter)



// Função para iniciar o servidor
async function startServer() {
    await connectToDatabase() // Conecta ao MongoDB
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`SERVER DDP ON http://localhost:3000/home`)
    })
}
  
  // Inicia o servidor
  startServer().catch(console.error)


//        node server.js        //  
//const PORT = process.env.PORT || 3000
//app.listen(PORT, console.log(`SERVER DDP ON http://localhost:3000/home`))
// afônicosquita