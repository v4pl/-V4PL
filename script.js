// JavaScript to hide the loading screen after a 3-second delay
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.style.opacity = '0'; // Start fade-out effect
            setTimeout(function() {
                loadingScreen.style.display = 'none'; // Hide after fade-out
                startTypingEffect(); // Start the typing effect after the loading screen is hidden
            }, 500); // Match with CSS transition duration
        }, 3000); // 3 seconds delay before fade-out
    }
});

// Typing effect
function startTypingEffect() {
    const text = "ᐯ4卩ㄥ®";
    const typingSpeed = 150; // Delay between each character

    let index = 0;
    const typedTextElement = document.getElementById('typed-text');

    function typeCharacter() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            typedTextElement.textContent = text; // Ensure full text is displayed after typing
        }
    }

    setTimeout(typeCharacter, 500); // Start typing after a slight delay (0.5s)
}
