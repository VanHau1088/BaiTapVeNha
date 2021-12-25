import {add, sub, mul, div} from "./calculate.js"


let a = document.getElementById("a");
let b = document.getElementById("b");
let button_Add = document.getElementById("btn_add");
let button_Sub = document.getElementById("btn_sub");
let button_Mul = document.getElementById("btn_mul");
let button_Div = document.getElementById("btn_div");
let kq = document.getElementById("kq");

  
button_Add.addEventListener('click' ,()=> {
    let number1 = a.value;
    let number2 = b.value;

    if(isNaN(Number(number1)) || isNaN(Number(number2))){
        alert('Number Not String');
    }else{
        kq.innerHTML += add(Number(number1), Number(number2));
    }
});

button_Sub.addEventListener('click' ,()=> {
    let number1 = a.value;
    let number2 = b.value;

    if(isNaN(Number(number1)) || isNaN(Number(number2))){
        alert('Number Not String');
    }else{
        kq.innerHTML += sub(Number(number1), Number(number2));
    }
});


button_Mul.addEventListener('click' ,()=> {
    let number1 = a.value;
    let number2 = b.value;

    if(isNaN(Number(number1)) || isNaN(Number(number2))){
        alert('Number Not String');
    }else{
        kq.innerHTML += mul(Number(number1), Number(number2));
    }
});


button_Div.addEventListener('click' ,()=> {
    let number1 = a.value;
    let number2 = b.value;

    if(isNaN(Number(number1)) || isNaN(Number(number2))){
        alert('Number Not String');
    }else{
        kq.innerHTML += div(Number(number1), Number(number2));
    }
});


