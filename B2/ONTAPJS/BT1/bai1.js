let a = document.getElementById("a");
let b = document.getElementById("b");
let button = document.getElementById("btn");
let arr = [];
function ktSoChan(n) {
  if (n < 0) return false;
  for (let i = 0; i < n ; i++) {
    if (i % 2 != 0) {
      return false;
    }
  }
  return true;
};

button.addEventListener("click", () => {
  if (a.value <= 0 || b.value <= 0) {
    alert("Incorrect");
  } else if (isNaN(Number(a.value) && isNaN(Number(b.value)))) {
    alert("Output is number not string");
  } else {
    let number1 = Number(a.value);
    let number2 = Number(b.value);

    for (let i = number1; i < number2; i++) {
      if (ktSoChan(i)){
        console.log(i);
        let result = document.getElementById("ketQua").innerHTML += i + " ";
        arr.push(result);
    }
    }
  }
});

