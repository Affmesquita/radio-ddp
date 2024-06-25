const btnMenu = document.getElementById("btn-hamburger")

btnMenu.classList.add('inactive')

export function toggleMenu() {
    const nav = document.getElementById('header-list')
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)

/*
const btnMenu = document.getElementById("btn-hamburger");

// Adiciona classe inicial ao botão hamburguer
btnMenu.classList.add('inactive');

export function toggleMenu() {
    const nav = document.getElementById('header-list');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', function() {
    btnMenu.classList.remove('inactive'); // Remove a classe 'inactive' ao ser clicado
    toggleMenu();
});
*/


