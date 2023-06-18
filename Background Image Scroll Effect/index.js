const bgImageEl = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
    bgImageEl.style.opacity = 1 - +window.pageYOffset / 700 + '';
    bgImageEl.style.backgroundSize = 100 + +window.pageYOffset / 5 + '%';
});
