const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/radioddp"; // Substitua "nome_do_banco" pelo nome do seu banco

// Função para conectar ao banco de dados
async function connectToDatabase() {
  try {
    await mongoose.connect(uri); // Não precisa mais de opções obsoletas
    console.log("Conectado ao MongoDB com Mongoose!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
}

// Exporta a função de conexão
module.exports = { connectToDatabase };