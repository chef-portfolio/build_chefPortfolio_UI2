let menu = document.querySelector('.hamburgerStack');

menu.addEventListener('click', () => {
    let dropdown = document.querySelector('.dropdown_menu');
    dropdown.classList.toggle('hidden_menu');
});