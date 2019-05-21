let menu = document.querySelector('.hamburger');
let searchBar = document.querySelector('input');
let dropdown = document.querySelector('.dropdown-menu');

menu.addEventListener('click', (toggle));

function toggle() {
    this.classList.toggle('is-active')
    dropdown.classList.toggle('hidden-menu');
    searchBar.classList.add('hidden-search');
}

let searchButton = document.querySelector('.search-icon');

searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('hidden-search');
});