    document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburgerMenu && mobileNav) {
    hamburgerMenu.addEventListener('click', function() {
    mobileNav.classList.toggle('active');

    const spans = this.querySelectorAll('span');
    if (mobileNav.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    spans[3].style.opacity = '0';
} else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    spans[3].style.opacity = '1';
}
});

    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    const spans = hamburgerMenu.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    spans[3].style.opacity = '1';
});
});
}
});