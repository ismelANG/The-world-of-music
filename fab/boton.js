// Seleccionar todos los botones
const buttons = document.querySelectorAll('.playPauseButton');

// Añadir un evento de click a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtener el ID del audio asociado al botón (a través del atributo data-audio-id)
        const audioId = button.getAttribute('data-audio-id');
        const audio = document.getElementById(audioId);

        // Si el audio está en pausa, lo reproducimos, si está reproduciéndose, lo pausamos
        if (audio.paused) {
            audio.play();  // Reproducir el audio
            button.textContent = 'Pausar';  // Cambiar el texto del botón
        } else {
            audio.pause();  // Pausar el audio
            button.textContent = 'Reproducir';  // Cambiar el texto del botón
        }
    });
});
