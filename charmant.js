function animateCharmantText() {
    const charmantText = document.getElementById('charmant-text');

    if (!charmantText) return; // Avoid errors if element is missing

    // Animate CHARMANT text
    const textContent = "CHARMANT";
    charmantText.innerHTML = textContent
        .split("")
        .map(letter => `<span class="char">${letter}</span>`)
        .join("");

    const letters = document.querySelectorAll(".char");

    // Animation triggers only when scrolled to the section
    function checkVisibility() {
        const section = document.querySelector('.charmant-section');
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.opacity = "1";
                }, 300 * index);
            });
        }
    }

    // Run animation on scroll
    window.addEventListener("scroll", checkVisibility);
}

// Load script properly
document.addEventListener('DOMContentLoaded', animateCharmantText);