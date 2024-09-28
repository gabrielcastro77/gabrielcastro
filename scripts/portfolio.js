const boxAnimation = document.querySelector(".box-animation")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const bab1 = document.querySelector(".bab1")
const bac1 = document.querySelector(".bac1")
const bab2 = document.querySelector(".bab2")
const bac2 = document.querySelector(".bac2")
const bab3 = document.querySelector(".bab3")
const bac3 = document.querySelector(".bac3")
const bab4 = document.querySelector(".bab4")
const bac4 = document.querySelector(".bac4")

boxAnimation.addEventListener("mouseover", () => {
    line1.style.display = "none"
    line2.style.display = "none"
})

boxAnimation.addEventListener("mouseout", () => {
    line1.style.display = "block"
    line2.style.display = "block"
})

boxAnimation.addEventListener("click", () => {
    let ancora = document.createElement('a')
    ancora.href = "../index.html"
    ancora.click();
})

bab1.addEventListener("mouseover", () => {
    bac1.style.visibility = "visible"
})

bab1.addEventListener("mouseout", () => {
    bac1.style.visibility = "hidden"
})

bab2.addEventListener("mouseover", () => {
    bac2.style.visibility = "visible"
})

bab2.addEventListener("mouseout", () => {
    bac2.style.visibility = "hidden"
})

bab3.addEventListener("mouseover", () => {
    bac3.style.visibility = "visible"
})

bab3.addEventListener("mouseout", () => {
    bac3.style.visibility = "hidden"
})

bab4.addEventListener("mouseover", () => {
    bac4.style.visibility = "visible"
})

bab4.addEventListener("mouseout", () => {
    bac4.style.visibility = "hidden"
})

