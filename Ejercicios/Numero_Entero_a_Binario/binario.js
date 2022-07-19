// Pasar un numero entero a binario

const numeroE = document.getElementById("numeroEntero"),
  numeroB = document.getElementById("numeroBinario"),
  btn = document.getElementById("buttonEntero");
btn.addEventListener("click", function () {
  let entero = parseInt(numeroE.value),
    binario = "",
    y = 0,
    x = [];
  if (entero) {
    if (entero > 0) {
      for (let i = 0; i < entero; i++) {
        if (2 ** i === entero) {
          x.push(1);
          for (let h = 0; h < i; h++) {
            x.push(0);
          }
          for (const character of x) {
            binario += character;
          }
          numeroB.innerHTML = entero + " en binario es " + binario;
          break;
        } else if (2 ** i > entero) {
          x.push(1);
          y = 2 ** (i - 1);
          for (let h = i - 2; h >= 0; h--) {
            y += 2 ** h;
            if (y > entero) {
              x.push(0);
              y -= 2 ** h;
            } else if (y === entero) {
              x.push(1);
              for (j = h - 1; j >= 0; j--) {
                x.push(0);
              }
              break;
            } else if (y < entero) {
              x.push(1);
            }
          }
          for (const character of x) {
            binario += character;
          }
          numeroB.innerHTML = entero + " en binario es " + binario;
          break;
        }
      }
    } else if (entero < 0) {
      numeroB.innerHTML = "No admitimos número negativos";
    } else {
      numeroB.innerHTML = entero + " en binario es " + 0;
    }
  } else {
    numeroB.innerHTML = "Por favor escribe un número.";
  }
});
