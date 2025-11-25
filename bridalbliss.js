// Add the loaded class for background transition
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.classList.add('loaded');

    // Text animation (letter-by-letter)
    const heroTitle = document.querySelector('.hero-title');
    const text = "Bridal Bliss";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            heroTitle.style.opacity = 1;
            index++;
            setTimeout(typeEffect, 100); // Adjust speed of animation
        }
    }

    typeEffect();
});
