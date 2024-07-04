// Parallax effect
document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function(el) {
        const speed = el.getAttribute('data-speed');
        const offset = window.pageYOffset * speed;
        el.style.backgroundPositionY = `${offset}px`;
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ensure iframe loads correctly
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('#token-chart iframe');
    if (iframe) {
        iframe.addEventListener('load', function() {
            console.log('Token chart iframe loaded successfully');
        });
    }
});
