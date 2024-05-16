// Add any JavaScript interactivity here if needed
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`${card.querySelector('h2').innerText} clicked!`);
        });
    });
});
