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

// Example of additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.buy-btn');
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            alert('Thank you for your interest in buying Joy (JOY)! Please follow the steps to purchase.');
        });
    }
});
