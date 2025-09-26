// js/main.js - Create this file and link it in index.html

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const swirls = document.querySelectorAll('.swirl-item');

    swirls.forEach((swirl, index) => {
        // Different movement intensity for each swirl
        // Adjust the 'offset' value to control how much they move with the mouse
        const offset = (index + 1) * 0.015; // e.g., 1.5%, 3%, 4.5% of mouse movement

        const moveX = (mouseX - window.innerWidth / 2) * offset;
        const moveY = (mouseY - window.innerHeight / 2) * offset;

        swirl.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
