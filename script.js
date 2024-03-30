// Event listener for DOMContentLoaded to ensure the HTML is fully loaded before executing scripts
window.addEventListener('DOMContentLoaded', (event) => {
    // Get the background audio element by its ID
    const backgroundAudio = document.getElementById('background-audio');
    // Attempt to play the background audio and log any errors if autoplay fails
    backgroundAudio.play().catch(error => {
        console.error("Audio autoplay failed:", error);
    });
});
