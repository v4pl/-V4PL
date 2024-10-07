// JavaScript to hide the loading screen after a 3-second delay
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.style.opacity = '0'; // Start fade-out effect
            setTimeout(function() {
                loadingScreen.style.display = 'none'; // Hide after fade-out
                startTypingEffect(); // Start typing effect after loading screen
            }, 500); // Match with CSS transition duration
        }, 3000); // 3 seconds delay before fade-out
    }
});

// JavaScript to handle snowflakes animation
document.addEventListener('DOMContentLoaded', function() {
    const numberOfDots = 100; // Number of stars/snowflakes
    const maxFallSpeed = 2; // Maximum speed of falling dots

    // Function to generate random number within a range
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a dot
    function createDot() {
        const dot = document.createElement('div');
        dot.classList.add('snowflake'); // Use 'snowflake' class for dots
        
        // Set random initial position
        dot.style.left = `${random(0, window.innerWidth)}px`;
        dot.style.top = `${random(-window.innerHeight, window.innerHeight)}px`;
        
        document.body.appendChild(dot);

        // Random speed for vertical movement
        const speed = random(0.5, maxFallSpeed);

        return { dot, speed };
    }

    // Generate dots
    const dots = Array.from({ length: numberOfDots }, createDot);

    // Function to animate falling dots
    function animateDots() {
        dots.forEach(({ dot, speed }) => {
            let currentTop = parseFloat(dot.style.top);

            // Update dot position
            currentTop += speed;

            // Reset position if dot goes below the viewport
            if (currentTop > window.innerHeight) {
                currentTop = random(-window.innerHeight, 0);
                dot.style.left = `${random(0, window.innerWidth)}px`;
            }

            dot.style.top = `${currentTop}px`;
        });

        requestAnimationFrame(animateDots); // Continue the animation
    }

    animateDots(); // Start the animation

    // Hover effect with delay on profile card
    let hoverTimeout;
    const profileCard = document.querySelector('.profile-card');

    profileCard.addEventListener('mouseenter', function() {
        hoverTimeout = setTimeout(() => {
            profileCard.classList.add('hover');
        }, 500); // 0.5-second delay
    });

    profileCard.addEventListener('mouseleave', function() {
        clearTimeout(hoverTimeout);
        profileCard.classList.remove('hover');
    });

    // 3D rotation effect on profile card based on mouse move
    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const centerX = window.innerWidth / 2;
        const rotateY = ((mouseX - centerX) / centerX) * 10; // Rotate based on X position

        profileCard.style.transform = `rotateY(${rotateY}deg)`;
    });
});

// Typing animation effect
function startTypingEffect() {
    const usernameElement = document.getElementById('username');
    const typedTextElement = document.getElementById('typed-text');

    const username = "ᐯ4卩ㄥ®"; // The username text
    const typedText = "FrontEnd/BackEnd Software Developer"; // The developer title text

    let usernameIndex = 0;
    let typedIndex = 0;

    // Function to simulate typing one character at a time
    function typeUsername() {
        if (usernameIndex < username.length) {
            usernameElement.textContent += username.charAt(usernameIndex);
            usernameIndex++;
            setTimeout(typeUsername, 150); // Delay between each character
        } else {
            setTimeout(typeDeveloperTitle, 500); // Start typing the developer title after delay
        }
    }

    // Function to simulate typing the developer title
    function typeDeveloperTitle() {
        if (typedIndex < typedText.length) {
            typedTextElement.textContent += typedText.charAt(typedIndex);
            typedIndex++;
            setTimeout(typeDeveloperTitle, 100); // Delay between each character
        } else {
            typedTextElement.classList.add('finished'); // Add class to stop cursor animation when done
        }
    }

    typeUsername(); // Start typing the username
}
