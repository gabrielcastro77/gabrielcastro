const boxAnimation = document.querySelector(".box-animation")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const mensagem = document.querySelector(".mensagem")
const i1 = document.querySelector(".i1")
const p1 = document.querySelector(".p1")
const i2 = document.querySelector(".i2")
const p2 = document.querySelector(".p2")
const i3 = document.querySelector(".i3")
const p3 = document.querySelector(".p3")
const i4 = document.querySelector(".i4")
const p4 = document.querySelector(".p4")
const i5 = document.querySelector(".i5")
const p5 = document.querySelector(".p5")
const submit = document.querySelector(".i6")
const submit2 = document.querySelector(".i7")
const form = document.querySelector(".form")

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

submit.addEventListener("click", (e) => {
    e.preventDefault()

    if (i1.checkValidity()) {
        p1.innerHTML = ""
    } else {
        i1.style.border = "1px solid #A94442"
        p1.innerHTML = i1.validationMessage
    }

    if (i2.checkValidity()) {
        p2.innerHTML = ""
    } else {
        i2.style.border = "1px solid #A94442"
        p2.innerHTML = i2.validationMessage
    }

    if (i3.checkValidity()) {
        p3.innerHTML = ""
    } else {
        i3.style.border = "1px solid #A94442"
        p3.innerHTML = i3.validationMessage
    }

    if (i4.checkValidity()) {
        p4.innerHTML = ""
    } else {
        i4.style.border = "1px solid #A94442"
        p4.innerHTML = i4.validationMessage
    }

    if (i5.checkValidity()) {
        p5.innerHTML = ""
    } else {
        i5.style.border = "1px solid #A94442"
        p5.innerHTML = i5.validationMessage
    }

    if (i1.checkValidity() && i2.checkValidity() && i3.checkValidity() && i4.checkValidity() && i5.checkValidity()) {
        // mensagem.style.display = "block"
        // mensagem.style.color = "#42a95c"
        // mensagem.style.background = "#def2df"
        // mensagem.innerHTML = "<span>Sucesso!</span> Mensagem enviada."
        // i1.value = ""
        // i2.value = ""
        // i3.value = ""
        // i4.value = ""
        // i5.value = ""
        submit.style.display = "none"
        submit2.style.display = "block"
        submit2.click();
    } else {
        mensagem.style.display = "block"
        mensagem.style.color = "#A94342"
        mensagem.style.background = "#F2DEDE"
        mensagem.innerHTML = "<span>Erro!</span> Tente novamente."
        p1.style.height = "46px"
        p2.style.height = "46px"
        p3.style.height = "46px"
        p4.style.height = "46px"
        p5.style.height = "46px"
    }
})

i1.addEventListener("input", () => {
    i1.style.border = "1px solid #BBBBBB"
    p1.innerHTML = ""
})

i2.addEventListener("input", () => {
    i2.style.border = "1px solid #BBBBBB"
    p2.innerHTML = ""
})

i3.addEventListener("input", () => {
    i3.style.border = "1px solid #BBBBBB"
    p3.innerHTML = ""
})

i4.addEventListener("input", () => {
    i4.style.border = "1px solid #BBBBBB"
    p4.innerHTML = ""
})

i5.addEventListener("input", () => {
    i5.style.border = "1px solid #BBBBBB"
    p5.innerHTML = ""
})