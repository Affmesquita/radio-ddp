const btnMenu = document.getElementById("btn-hamburger")

function toggleMenu() {
    const nav = document.getElementById('header-list')
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)

module.exports = toggleMenu;