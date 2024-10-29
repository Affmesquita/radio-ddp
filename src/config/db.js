// db.js
const mongoose = require('mongoose')

const uri = "mongodb+srv://affonsomesquita:c5VhoKyNCuz3hNZA@cluster0.abvyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Função para conectar ao banco de dados
async function connectToDatabase() {
  try {
    await mongoose.connect(uri) // Remova as opções obsoletas
    console.log("Conectado ao MongoDB com Mongoose!")
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error)
  }
}

// Exporta a função de conexão
module.exports = { connectToDatabase }