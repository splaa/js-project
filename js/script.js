let a = 6
let b = 'Hello'
console.log(a);

let inputIn = document.querySelector('.input-in')
let button = document.querySelector('button')

button.onclick = function () {
    console.log(+inputIn.value);
    
    inputIn.value = ''
}
