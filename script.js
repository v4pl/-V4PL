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
            currentTop =
