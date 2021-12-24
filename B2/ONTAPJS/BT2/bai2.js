
let changeColor = document.getElementById("app");

    changeColor.addEventListener('mouseover', ()=>{
           changeColor.style.backgroundColor = 'blue';
          
    })
    changeColor.addEventListener('mouseout', ()=>{
        changeColor.style.backgroundColor = 'black';
    });