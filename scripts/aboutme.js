const boxAnimation = document.querySelector(".box-animation")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")

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
