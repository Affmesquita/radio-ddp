const btnMenu = document.getElementById("btn-hamburger")

export function toggleMenu() {
    const nav = document.getElementById('header-list')
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)

