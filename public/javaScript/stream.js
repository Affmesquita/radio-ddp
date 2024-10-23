async function fetchStreamUrl() {
    try {
        const response = await fetch('/api/stream-url')
        const data = await response.json()
        document.getElementById('video-source').src = data.url
        document.getElementById('meu-video').load() // Recarrega o vídeo
    } catch (error) {
        console.error('Erro ao buscar a URL do stream:', error)
    }
}

// Chama a função para buscar a URL ao carregar a página
fetchStreamUrl()

export { fetchStreamUrl }