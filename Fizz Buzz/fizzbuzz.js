// escribe numeros del 1 al 100
// si el numero es multiplo de 3 escribe "Fizz"
// si el numero es multiplo de 5 escribe "Buzz"
// si el numero es multiplo de 3 y de 5 escribe "Fizz Buzz"
// crear una funcion que retorne verdadero si el numero es divisible y falso si no lo es

let txt = document.getElementById("txt_parrafo"),
  m35 = 0,
  m3 = 0,
  m5 = 0,
  m0 = 0;
for (let i = 1; i <= 100; i++) {
  if (esDivisible(i, 3) && esDivisible(i, 5)) {
    txt.innerHTML += "Fizz Buzz";
    m35++;
    m3++;
    m5++;
  } else if (esDivisible(i, 3)) {
    txt.innerHTML += "Fizz";
    m3++;
  } else if (esDivisible(i, 5)) {
    txt.innerHTML += "Buzz";
    m5++;
  } else {
    txt.innerHTML += i;
    m0++;
  }
  txt.innerHTML += "<br>";
}
console.log(m35, m3, m5, m0);
function esDivisible(x, y) {
  if (x % y == 0) {
    return true;
  } else {
    return false;
  }
}
/* for(let i = 1 ; i <= 100 ; i++){
    if(i%3 == 0 && i%5 == 0){
        txt.innerHTML += "Fizz Buzz";
        m35++
        m3++
        m5++
    } else if(i%3 == 0){
        txt.innerHTML += "Fizz";
        m3++
    } else if(i%5 == 0){
        txt.innerHTML += "Buzz";
        m5++
    } else{
        txt.innerHTML += i;
        m0++
    }
    txt.innerHTML += "<br>";
}*/
