let menu = document.querySelector('.hamburger');

menu.addEventListener('click', (toggle));

function toggle() {
    this.classList.toggle('is-active');
    let dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('hidden-menu');
}