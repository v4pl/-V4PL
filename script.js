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
        dot.classList.add('dot');
        
        // Set random initial position, with some dots starting below the top of the viewport
        dot.style.left = random(0, window.innerWidth) + 'px';
        dot.style.top = random(-window.innerHeight, window.innerHeight) + 'px';
        
        document.body.appendChild(dot);

        // Random speed for vertical movement
        const speed = random(0.5, maxFallSpeed);

        return { dot, speed };
    }

    // Generate dots
    const dots = [];
    for (let i = 0; i < numberOfDots; i++) {
        dots.push(createDot());
    }

    // Function to animate falling dots
    function animateDots() {
        dots.forEach((item) => {
            const { dot, speed } = item;
            let currentTop = parseFloat(dot.style.top);

            // Update dot position
            currentTop += speed;

            // Reset position if dot goes below the viewport
            if (currentTop > window.innerHeight) {
                currentTop = random(-window.innerHeight, 0);
                dot.style.left = random(0, window.innerWidth) + 'px';
            }

            dot.style.top = currentTop + 'px';
        });

        requestAnimationFrame(animateDots); // Continue the animation
    }

    animateDots(); // Start the animation

    // Add a class to the profile card when hovered
    const profileCard = document.querySelector('.profile-card');
    let hoverTimeout;

    profileCard.addEventListener('mouseenter', function() {
        hoverTimeout = setTimeout(() => {
            profileCard.classList.add('hovered');
        }, 1000); // Delay of 1 second
    });

    profileCard.addEventListener('mouseleave', function() {
        clearTimeout(hoverTimeout); // Clear the timeout if mouse leaves before delay
        profileCard.classList.remove('hovered');
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
