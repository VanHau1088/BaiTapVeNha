import {add, sub, mul, div} from "./calculate.js"


let a = document.getElementById("a");
let b = document.getElementById("b");
let button_Add = document.getElementById("btn_add");
let button_Sub = document.getElementById("btn_sub");
let button_Mul = document.getElementById("btn_mul");
let button_Div = document.getElementById("btn_div");
let kq = document.getElementById("kq");

    button_Add.addEventListener('click', () =>{
       
        let number1 = a.value;
        let number2 = b.value;
      
            kq.innerHTML += add(parseInt((number1)), parseInt((number2))); 
        
        
    });

    button_Sub.addEventListener('click', () =>{
        let number1 = a.value;
        let number2 = b.value;
        kq.innerHTML += sub(parseInt((number1)), parseInt((number2)))  ; 
        });

    button_Mul.addEventListener('click', () =>{
        let number1 = a.value;
        let number2 = b.value;
        kq.innerHTML += mul(parseInt((number1)), parseInt((number2))) ; 
        });

    button_Div.addEventListener('click', () =>{
        let number1 = a.value;
        let number2 = b.value;
        kq.innerHTML += div(parseInt((number1)), parseInt((number2))) ; 
        });