// al ultimo numero se le suma el ante ultimo numero
// 0, 1, 1, 2, 3, 5, 8, 13, 21

let fib = 100, // ingresa en esta variable cuantos números en la sequencia queres ver
  x = 0,
  y = 1,
  z = 0;
for (i = 0; i < fib; i++) {
  document.write(z + "<br>");
  z = x + y;
  y = x;
  x = z;
}

// de forma recursiva seria
/*
function fib(x) {
  if (x == 0) {
    return 1;
  }
  if (x == 1) {
    return 1;
  }
  return fib(x - 1) + fib(x - 2);
}
*/
