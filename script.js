const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const cards = document.querySelectorAll('.card');
const h2Elements = document.querySelectorAll('h2');
const footer = document.querySelector('footer');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    cards.forEach(card => card.classList.toggle('light-mode'));
    h2Elements.forEach(h2 => h2.classList.toggle('light-mode'));
    footer.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        modeToggle.textContent = '🌙'; //lightmode
    } else {
        modeToggle.textContent = '☀️'; //Darkmode
    }
});