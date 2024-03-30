window.addEventListener('DOMContentLoaded', (event) => {
    // Automatically play background sound
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.play().catch(error => {
        console.error("Audio autoplay failed:", error);
    });
});
