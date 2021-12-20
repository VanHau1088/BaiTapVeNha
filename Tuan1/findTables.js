let table_ = document.getElementById("table_");
let a = document.getElementById("a");
let b = document.getElementById("b");
let button = document.getElementById("btn");

let renderRow = n =>{
    let html = ``;
    for(let i = 0; i < n; i++){
        html += `<td >Emil </td>`
    }
    console.log(html);
    return html; 
}

button.addEventListener("click", () => {
    if (a.value <= 0 || b.value <= 0) {
      alert("Incorrect");
    } 
    else if (isNaN(Number(a.value) && isNaN(Number(b.value)))) {
      alert("Output is number not string");
    } 
    else {
      let number1 = Number(a.value);
      let number2 = Number(b.value);
        let result = ``;
        for(let i=0; i<number1; i++){
            let html = ` <tr> ${renderRow(number2)} </tr>`
        result += html;
        };
        table_.innerHTML = result;
    };
  });


