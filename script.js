// JavaScript to hide the loading screen after a 2-second delay
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.style.opacity = '0'; // Fade out effect
            setTimeout(function() {
                loadingScreen.style.display = 'none'; // Remove from the DOM after fade out
            }, 500); // Delay to match the fade out duration
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const numberOfDots = 100; // Number of stars/snowflakes
    const maxFallSpeed = 2; // Maximum speed of falling dots

    // Function to generate random number within a range
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a dot
    function createSnowflake() {
        const dot = document.createElement('div');
        dot.classList.add('snowflake'); // Changed class name to 'snowflake'
        
        // Set random initial position
        dot.style.left = `${random(0, window.innerWidth)}px`;
        dot.style.top = `${random(-window.innerHeight, window.innerHeight)}px`;
        
        document.body.appendChild(dot);

        // Random speed for vertical movement
        const speed = random(0.5, maxFallSpeed);

        return { dot, speed };
    }

    // Generate snowflakes
    const snowflakes = Array.from({ length: numberOfDots }, createSnowflake);

    // Function to animate falling snowflakes
    function animateSnowflakes() {
        snowflakes.forEach(({ dot, speed }) => {
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

        requestAnimationFrame(animateSnowflakes); // Continue the animation
    }

    animateSnowflakes(); // Start the animation

    // Handle hover effect with delay
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

    // Function to handle mouse move for direction effect
    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX; // Get mouse X position
        const centerX = window.innerWidth / 2;
        const rotateY = ((mouseX - centerX) / centerX) * 10; // Calculate rotation based on X position only

        // Apply 3D rotation to the profile card
        profileCard.style.transform = `rotateY(${rotateY}deg)`;
    });
});
