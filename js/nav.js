let menu = document.querySelector('.hamburger');
let searchBar = document.querySelector('input');
let dropdown = document.querySelector('.dropdown-menu');
console.log(dropdown);
menu.addEventListener('click', (toggle));

function toggle() {
    this.classList.toggle('is-active');
    console.log(dropdown)
    dropdown.classList.toggle('hidden-menu');
    searchBar.classList.add('hidden-search');
}

let searchButton = document.querySelector('.search-icon');

searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('hidden-search');
    dropdown.classList.add('hidden-menu');
});