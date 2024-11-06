async function deleteEpisode(episodioId) {
    if (confirm('Tem certeza que deseja deletar este episódio?')) {
        try {
            const response = await fetch(`/episodio/${episodioId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message); // Exibir mensagem de sucesso
                
                // Remover o episódio da lista exibida
                const episodioElement = document.getElementById(`episodio-${episodioId}`);
                if (episodioElement) {
                    episodioElement.remove(); // Remove o elemento do DOM
                }
            } else {
                alert(data.message); // Exibir mensagem de erro
            }
        } catch (error) {
            console.error('Erro ao deletar episódio:', error);
            alert('Erro ao deletar episódio.');
        }
    }
}