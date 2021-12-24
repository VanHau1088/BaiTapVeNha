

let app = document.getElementById('app');
function numberOneTriangle(){
   let number = '';
   for(let i=0; i<5; i++){
           number += 1;
            app.innerHTML += '<br>' + number + '';
   }
}

app.addEventListener('click', numberOneTriangle());

