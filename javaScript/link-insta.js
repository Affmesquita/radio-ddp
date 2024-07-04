export function showLinkInsta() {
    const linkInsta = document.getElementById('link-insta')
    const headerNav = document.getElementById('header-nav')
    const footer = document.querySelector('footer')
    const headerNavHeight = headerNav.offsetHeight
    const footerTop = footer.getBoundingClientRect().top

    if (window.scrollY > headerNavHeight && footerTop > window.innerHeight) {
        linkInsta.classList.remove('hidden')
    } else {
        linkInsta.classList.add('hidden')
    }
}
