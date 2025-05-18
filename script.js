document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const audio = document.getElementById('backgroundMusic');
    
    // Manejar el clic en el sobre
    envelope.addEventListener('click', () => {
        envelope.classList.add('opened');
        
        // Intentar reproducir la música
        if (audio) {
            audio.play().catch(function(error) {
                console.log("Error al reproducir:", error);
            });
        }
    });
    
    // Asegurarnos de que la música siga reproduciéndose
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play().catch(function(error) {
            console.log("Error al reiniciar:", error);
        });
    });
});
