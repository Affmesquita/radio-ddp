const mongoose = require('mongoose');

const uri = "mongodb+srv://affonsomesquita:c5VhoKyNCuz3hNZA@ddp.abvyc.mongodb.net/?retryWrites=true&w=majority&appName=DDP"; // Substitua "nome_do_banco" pelo nome do seu banco

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

/*
const uri = "mongodb+srv://affonsomesquita:c5VhoKyNCuz3hNZA@ddp.abvyc.mongodb.net/?retryWrites=true&w=majority&appName=DDP"; // Substitua "nome_do_banco" pelo nome do seu banco 
// */ 


/*

const mongoose = require('mongoose')
   const uri = "mongodb+srv://affonsomesquita:c5VhoKyNCuz3hNZA@cluster0.abvyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

   async function connectToDatabase() {
     try {
       await mongoose.connect(uri) // Conecta ao MongoDB usando a URI fornecida
       console.log("Conectado ao MongoDB com Mongoose!")
     } catch (error) {
       console.error("Erro ao conectar ao MongoDB:", error)
     }
   }

   module.exports = { connectToDatabase }

*/   