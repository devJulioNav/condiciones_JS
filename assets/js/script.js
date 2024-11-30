//EJERCICIO #1
const logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
    if (logo.style.border === ''){
        logo.style.border = '2px solid red'
    } else {
        logo.style.border = ''
    }
})

//EJERCICI0 #2
const input1 = document.getElementById('inp-1')
const input2 = document.getElementById('inp-2')
const input3 = document.getElementById('inp-3')
const confirmation = document.getElementById('confirmation')
const btn1 = document.getElementById('btn-verification')

btn1.addEventListener('click',() => {
    const totalStickers = Number(input1.value) + Number(input2.value) + Number(input3.value)
    if (totalStickers <= 10){
        confirmation.innerHTML = `Llevas ${totalStickers} stickers` 
        confirmation.style.color = 'blue'
        confirmation.style.fontWeight = 'bold'
    } else {
        confirmation.innerHTML = 'Llevas demasiados stickers'
        confirmation.style.color = 'red'
        confirmation.style.fontWeight = 'bold'
    }
})

//EJERCICIO #3
const select1 = document.getElementById('sel-1')
const select2 = document.getElementById('sel-2')
const select3 = document.getElementById('sel-3')
const btn2 = document.getElementById('btn-enter')
const answer = document.getElementById('answer')

btn2.addEventListener('click', () => {
    const access = select1.value + select2.value + select3.value
    if (access == '911'){
        answer.innerHTML = 'Password 1 es correcto'
        answer.style.color = 'green'
        answer.style.fontWeight = 'bold'
    } else if (access == '714'){
        answer.innerHTML = 'Password 2 es correcto'
        answer.style.color = 'green'
        answer.style.fontWeight = 'bold'
    } else {
        answer.innerHTML = 'Password incorrecto'
        answer.style.color = 'red'
        answer.style.fontWeight = 'bold'
    }
})