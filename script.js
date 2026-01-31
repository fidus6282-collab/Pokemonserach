import pokemons from './pokemons.js';

const search = document.querySelector('.search'); // ✅ FIX
const kartochki = document.querySelector('.kartochki');

// clear container (safe)
kartochki.innerHTML = '';

pokemons.forEach(element => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');

    newDiv.innerHTML = `
        <h2>${element.name}</h2>
        <img src="${element.img}" alt="${element.name}">
        <span class="type">${element.type}</span>
        <span class="ves">${element.weight} kg</span>
    `;

    kartochki.appendChild(newDiv);
});

// SEARCH
search.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardName = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = cardName.includes(value) ? 'block' : 'none';
    });
});
