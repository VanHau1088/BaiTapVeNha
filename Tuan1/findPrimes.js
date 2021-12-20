let a = document.getElementById("a");
let b = document.getElementById("b");
let button = document.getElementById("btn");
let arr = [];
function ktSoNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n - 1; i++) {
    if (n % i == 0) {
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
      if (ktSoNguyenTo(i)){
        console.log(i);
        let result = document.getElementById("ketQua").innerHTML += i + " ";
        arr.push(result);
    }
    }
  }
});


//em khai báo function ở bên ngoài với sai chính tả xíu thôi
