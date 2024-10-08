
const header = document.querySelector('header')
const box = document.querySelector('.box')
const animation = document.querySelector('.animation')
const title = document.querySelector('.title')
const menu = document.querySelector('.menu')
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')
const na = document.querySelector('.name')

function mov() {
    animation.style = 'display: none;'
    title.style = 'display: none;'
    menu.style = 'display: none;'
    na.style = 'display: none;'
    header.style = 'margin: 0; max-width: 100%; height: 100vh;'
    box.style = 'background-color: #CCCCCC; background-image: none; transform: rotate(0deg); width: 100%; height: 100%; margin: auto;'
}

function anc(path) {
    let ancora = document.createElement('a')
    ancora.href = path
    ancora.click();
}

function rel() {
    location.reload(); 
}

link1.addEventListener('click', () => {
    const width = window.innerWidth
    if (width <= 374) {
        animation.style = 'width: 190px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/aboutme.html")
        setTimeout(rel, 2500)
    } if (width >= 375 && width <= 767) {
        animation.style = 'width: 230px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/aboutme.html")
        setTimeout(rel, 2500)
    } if (width >= 768 && width <= 1023) {
        animation.style = 'width: 470px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/aboutme.html")
        setTimeout(rel, 2500)
    } if (width >= 1024) {
        animation.style = 'width: 500px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/aboutme.html")
        setTimeout(rel, 2500)
    }
})

link2.addEventListener('click', () => {
    const width = window.innerWidth
    if (width <= 374) {
        animation.style = 'width: 190px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/services.html")
        setTimeout(rel, 2500)
    } if (width >= 375 && width <= 767) {
        animation.style = 'width: 230px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/services.html")
        setTimeout(rel, 2500)
    } if (width >= 768 && width <= 1023) {
        animation.style = 'width: 470px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/services.html")
        setTimeout(rel, 2500)
    } if (width >= 1024) {
        animation.style = 'width: 500px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/services.html")
        setTimeout(rel, 2500)
    }
})

link3.addEventListener('click', () => {
    const width = window.innerWidth
    if (width <= 374) {
        animation.style = 'width: 190px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/portfolio.html")
        setTimeout(rel, 2500)
    } if (width >= 375 && width <= 767) {
        animation.style = 'width: 230px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/portfolio.html")
        setTimeout(rel, 2500)
    } if (width >= 768 && width <= 1023) {
        animation.style = 'width: 470px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/portfolio.html")
        setTimeout(rel, 2500)
    } if (width >= 1024) {
        animation.style = 'width: 500px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/portfolio.html")
        setTimeout(rel, 2500)
    }
})

link4.addEventListener('click', () => {
    const width = window.innerWidth
    if (width <= 374) {
        animation.style = 'width: 190px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/contacts.html")
        setTimeout(rel, 2500)
    } if (width >= 375 && width <= 767) {
        animation.style = 'width: 230px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/contacts.html")
        setTimeout(rel, 2500)
    } if (width >= 768 && width <= 1023) {
        animation.style = 'width: 470px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/contacts.html")
        setTimeout(rel, 2500)
    } if (width >= 1024) {
        animation.style = 'width: 500px'
        setTimeout(mov, 1000)
        setTimeout(anc, 2000, "pages/contacts.html")
        setTimeout(rel, 2500)
    }
})