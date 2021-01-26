/** Unit -2 */
//========='Task 1'==========//

let a = 7
let b = 9
console.log('"Task 1" : ', a * b);
//========='Task 2'==========//

let c = 7
let d = 9
console.log('"Task 2" : ', c / d);
//=========='Task 3'=========//

let e = 3
let f = 5
console.log('"Task 3" : ', e + f);
//========='Task 4'==========//

let e1 = '3'
let f1 = 5
console.log('"Task 4" : ', e1 + f1);
//========='Task 5'==========//

let e2 = 3
let f2 = 0
console.log('"Task 5" : ', e2 / f2);
//==========='Task 6'========//

let e3 = 3
let f3 = 'Hello'
console.log('"Task 6" : ', e3 + f3);
//=========='Task 7'=========//
console.log();
let e4 = 3
let f4 = 'Hello'
console.log('"Task 7" : ', e4 * f4);
//========'Task 8'===========//

let input = document.querySelector('#input-task-8')
let buttonTask8 = document.querySelector('.btn-task8').onclick = function () {
    console.log('"Task 8" : ', input.value);
}
//=========='Task 9'=========//

let buttonTask9 = document.querySelector('.btn-task9').onclick = function () {
    console.log('"Task 9" : ', input.value);
    input.value = ''
}
//=========='Task 10'=========//

let inputIn10 = document.querySelector('#input-task-10')
let sTsk10 = document.querySelector('#s-tsk-10')
document.querySelector('#btn-tsk-10').onclick = function () {

    sTsk10.innerHTML = +inputIn10.value * 10

    console.log('"Task 10" : ' + inputIn10.value * 10);
}
//=========='Task 11'=========//

let inTsk11 = document.querySelector('#input-task-11')
let sTsk11 = document.querySelector('#s-tsk-11')
document.querySelector('#btn-tsk-11').onclick = function () {
    sTsk11.innerHTML = +inTsk11.value + 10

}

//=========='Task 12'=========//
let inName = document.querySelector('#in-name-tsk-12')
let inLastName = document.querySelector('#in-last-name-tsk-12')

document.querySelector('#btn-tsk-12').onclick = function () {
    let res = "'" + 'Hello' + ' '
    res += inName.value + ' '
    res += inLastName.value + "'"
    console.log(res);
}
//=========='Task 13'=========//
let inNumA = document.querySelector('#in-num-a-tsk-13')
let inNumB = document.querySelector('#in-num-b-tsk-13')

document.querySelector('#btn-tsk-13').onclick = function () {

    console.log((+inNumA.value) + (+inNumB.value));
}

//=========='Task 14'=========//
let inT14 = document.querySelector('#in-num-a-tsk-14')

document.querySelector('#btn-tsk-14').onclick = function () {
    inT14.value = 'Hello'
}

//=========='Task 15'=========//

let y = document.querySelector('#in-num-a-tsk-15')
y.style.border = '2px solid red'

//=========='Task 16'=========//

let inNum_X_T16 = document.querySelector("#in-x-Tsk-16")
let inNum_Y_T16 = document.querySelector("#in-y-Tsk-16")
function sum(a, b) {
    return (+a) + (+b);
}
function res(x, y) {
    document.querySelector('#res-16').innerHTML = ' = ' + sum(x, y)


}
res(inNum_X_T16.value, inNum_Y_T16.value)
inNum_X_T16.onchange = function () {
    res(inNum_X_T16.value, inNum_Y_T16.value)
}
inNum_Y_T16.onchange = () => {
    res(inNum_X_T16.value, inNum_Y_T16.value)

}

//=========='Task 17'=========//

document.querySelector('#btn-tsk-17').onclick = function () {
    let t = document.querySelector('#in-tsk-17').value
    t = parseInt(t)
    console.log('"Task 17" : ', t);
}

//=========='Task 18'=========//

document.querySelector('#btn-tsk-18').onclick = function () {
    let t = document.querySelector('#in-tsk-18').value
    t = parseFloat(t)
    console.log('"Task 18" : ', t);
}

//=========='Task 19'=========//

let in_X_Tsk19 = document.querySelector('#in-x-tsk-19')
let in_Y_Tsk19 = document.querySelector('#in-y-tsk-19')
let resTsk19 = document.querySelector('#res-tsk-19')

function sumOt(x, y) {
    return parseInt(x) + parseInt(y)

}

in_X_Tsk19.onchange = function () {
    resTsk19.innerHTML = sum(in_X_Tsk19.value, in_Y_Tsk19.value);
}
in_Y_Tsk19.onchange = function () {
    resTsk19.innerHTML = sum(in_X_Tsk19.value, in_Y_Tsk19.value);
}
//=========='Task 20'=========//
let in_Name_Tsk20 = document.querySelector('#in-name-tsk-20')
let in_LastName_Tsk20 = document.querySelector('#in-last-name-tsk-20')
let in_Age_Tsk20 = document.querySelector('#in-age-tsk-20')
let in_Prof_Tsk20 = document.querySelector('#in-prof-tsk-20')
let textTask20 = document.querySelector('#res-tsk-20')
let btnTask20 = document.querySelector('#btn-tsk-20')



btnTask20.onclick = () => {
    let resTsk20 = "Уважаемый " + in_Name_Tsk20.value + ",";
    resTsk20 += in_LastName_Tsk20.value + ","
    resTsk20 += "ваш возраст "
    resTsk20 += in_Age_Tsk20.value + ', '
    resTsk20 += "по професии Вы "
    resTsk20 += in_Prof_Tsk20.value
    
    textTask20.innerHTML = resTsk20
}





//===================//


