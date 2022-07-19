// Escribe una función recursiva para encontrar el número mayor de un array.

/*
et array = [1, 4, 9, 2, 5, 24, 350, 67, 33, 55, 88, 352, 351, 300],
    array2 = 0;
for(i = 0 ; i < array.length ; i++){
    if(array2 < array[i]){
        array2 = array[i];
    }
}
document.write(array2);
*/

// Segundo número más grande

/* Esta funcion de aca abajo no funciona con numeros repetidos, probamos otra
let array = [1, 4, 9, 2, 5, 24, 350, 67, 33, 55, 88, 352, 351, 300, 400, 402, 405, 403, 405];
array.sort(function(a, b){return a - b}) //ascending order, make it b - a to get a descending order
// document.write(array[array.length-1]); // número más grande
document.write(array[array.length-2]); // segundo número más grande


en orden descendiente seria:
array.sort(function(a, b){return b - a})
document.write(array[0]); // número más grande
document.write(array[1]); // segundo número más grande
*/

let array = [1, 4, 9, 2, 5, 23, 43, 43, 25];
array.sort(function (a, b) {
  return b - a;
}); // ordeno el array de forma descendiente para que los numeros mas grandes esten al principio
for (let i = 0; i < array.length; i++) {
  if (array[i + 1] != array[i]) {
    // me fijo si el segundo numero es distinto al primero
    document.write(array[i + 1]);
    break;
  }
}

// Este ultimo código encuentra el segundo número más grande en un array, incluso si hay números repetidos.
