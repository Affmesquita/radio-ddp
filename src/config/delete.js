const { connectToDatabase } = require('./db');
const Video = require('./videoModel');

async function deleteVideoById(videoId) {
  try {
    // Exclui o vídeo do banco de dados
    const result = await Video.findByIdAndDelete(videoId);
    
    if (result) {
      console.log("Vídeo excluído com sucesso:", result);
    } else {
      console.log("Vídeo não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao excluir o vídeo:", error);
  }
}

(async () => {
  await connectToDatabase();
  
  // Exemplo: Chame esta função passando o ID do vídeo que deseja excluir
  await deleteVideoById('ID_DO_VIDEO_AQUI'); // Substitua pelo ID do vídeo que deseja excluir
})();