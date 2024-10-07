// Wait for the page to load
window.addEventListener('load', function() {
    // Loading screen logic
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.style.opacity = '0'; // Start fade-out effect
            setTimeout(function() {
                loadingScreen.style.display = 'none'; // Hide after fade-out
                startTypingEffect(); // Start typing after loading is done
            }, 500); // Match with CSS transition duration
        }, 3000); // Delay before fade-out
    }
});

// Typing effect for "ᐯ4卩ㄥ®" username and "FrontEnd/BackEnd Software Developer"
const username = "ᐯ4卩ㄥ®";
const developerText = "FrontEnd/BackEnd Software Developer";
let index = 0;
let devIndex = 0;
const speed = 100; // Adjust typing speed (in milliseconds)

function startTypingEffect() {
    // Typing effect for username
    typeUsername();
}

function typeUsername() {
    if (index < username.length) {
        document.getElementById('username').innerHTML += username.charAt(index);
        index++;
        setTimeout(typeUsername, speed);
    } else {
        setTimeout(typeDeveloperText, 1000); // After username, delay then type developer text
    }
}

function typeDeveloperText() {
    if (devIndex < developerText.length) {
        document.getElementById('typed-text').innerHTML += developerText.charAt(devIndex);
        devIndex++;
        setTimeout(typeDeveloperText, speed);
    } else {
        document.getElementById('typed-text').classList.add('finished'); // Add class when typing is done
    }
}

// Snowflake Animation
document.addEventListener('DOMContentLoaded', function() {
    const numberOfDots = 100; // Number of stars/snowflakes
    const maxFallSpeed = 2; // Maximum speed of falling dots

    // Function to generate random number within a range
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a dot (snowflake)
    function createDot() {
        const dot = document.createElement('div');
        dot.classList.add('snowflake'); // Use 'snowflake' class for dots
        dot.style.left = `${random(0, window.innerWidth)}px`;
        dot.style.top = `${random(-window.innerHeight, window.innerHeight)}px`;
        document.body.appendChild(dot);

        const speed = random(0.5, maxFallSpeed);
        return { dot, speed };
    }

    // Generate dots
    const dots = Array.from({ length: numberOfDots }, createDot);

    // Function to animate falling dots
    function animateDots() {
        dots.forEach(({ dot, speed }) => {
            let currentTop = parseFloat(dot.style.top);
            currentTop += speed;

            if (currentTop > window.innerHeight) {
                currentTop = random(-window.innerHeight, 0);
                dot.style.left = `${random(0, window.innerWidth)}px`;
            }

            dot.style.top = `${currentTop}px`;
        });
        requestAnimationFrame(animateDots); // Continue the animation
    }

    animateDots(); // Start the animation
});

// Profile card hover effects
let hoverTimeout;
const profileCard = document.querySelector('.profile-card');

profileCard.addEventListener('mouseenter', function() {
    hoverTimeout = setTimeout(() => {
        profileCard.classList.add('hover');
    }, 500); // Delay before hover effect
});

profileCard.addEventListener('mouseleave', function() {
    clearTimeout(hoverTimeout);
    profileCard.classList.remove('hover');
});

// Mouse movement effect for 3D rotation
document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX; // Get mouse X position
    const centerX = window.innerWidth / 2;
    const rotateY = ((mouseX - centerX) / centerX) * 10; // Calculate rotation based on X position
    profileCard.style.transform = `rotateY(${rotateY}deg)`; // Apply rotation
});
