// db.js
const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = "mongodb+srv://affonsomesquita:c5VhoKyNCuz3hNZA@cluster0.abvyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Cria um cliente MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

// Função para conectar ao banco de dados
async function connectToDatabase() {
  try {
    await client.connect() // Conecta o cliente ao servidor
    await client.db("admin").command({ ping: 1 }) // Envia um ping para confirmar a conexão
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error)
  } finally {
    await client.close() // Fecha a conexão após a operação
  }
}

// Exporta a função de conexão
module.exports = { connectToDatabase }