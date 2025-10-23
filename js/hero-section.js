const mainText = document.getElementById('mainText');
const subText = document.getElementById('subText');
const tagline = document.getElementById('tagline');
const author = document.getElementById('author');
const buttons = document.getElementById('buttons');
const cursor = document.querySelector('.cursor');

// Get all sonar card containers
const sonarContainers = document.querySelectorAll('.sonar-container, .sonar-container-mobile');

// First remove all the animation classes from HTML
mainText.classList.remove('show');
subText.classList.remove('slide-up');
tagline.classList.remove('slide-up');
author.classList.remove('slide-up');
buttons.classList.remove('slide-up');

// Hide all sonar containers initially
sonarContainers.forEach(container => {
    container.style.opacity = '0';
    container.style.transition = 'opacity 1.5s ease';
});

// Show "Hello World!.."
setTimeout(() => {
    mainText.classList.add('show');
}, 500);

// Then show "byteWithRuvinda"
setTimeout(() => {
    subText.classList.add('slide-up');
}, 2500);

// Then show tagline and author
setTimeout(() => {
    tagline.classList.add('slide-up');
    author.classList.add('slide-up');
}, 3800);

// Then show buttons
setTimeout(() => {
    buttons.classList.add('slide-up');
}, 5200);

// Finally, show sonar containers
setTimeout(() => {
    sonarContainers.forEach(container => {
        container.style.opacity = '1';
    });
}, 6500);