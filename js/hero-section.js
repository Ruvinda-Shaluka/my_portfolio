const mainText = document.getElementById('mainText');
const subText = document.getElementById('subText');
const tagline = document.getElementById('tagline');
const author = document.getElementById('author');
const buttons = document.getElementById('buttons');
const cursor = document.querySelector('.cursor');

// Show "Hey Stranger"
setTimeout(() => {
    mainText.classList.add('show');
}, 500);

// Then show "byteWithRuvinda"
setTimeout(() => {
    // cursor.style.display = 'none';
    subText.classList.add('slide-up');
}, 2500);

// Then show tagline
setTimeout(() => {
    tagline.classList.add('slide-up');
    author.classList.add('slide-up');
}, 3800);

// Finally, show buttons
setTimeout(() => {
    buttons.classList.add('slide-up');
}, 5200);