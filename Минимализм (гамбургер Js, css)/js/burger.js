const menuBtn = document.querySelector('.menu__btn')
const menuToggle = document.getElementById('menu__toggle')
const main = document.querySelector('main')

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    menuToggle.classList.toggle('_active')
})

document.addEventListener('click', (e) => {
    if (e.target.className != 'hamburger-menu' &&
        e.target.className != 'menu__btn' &&
        e.target.className != 'menu__box') {
        menuToggle.classList.remove('_active')
    }
})