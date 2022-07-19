/*En un sistema de locker donde puedes guardar tu bicicleta de manera segura, 
debes crear un sistema que registre el nombre del usuario, el número de casillero donde se guardó la bicicleta, 
la fecha y hora de entrada, la fecha y hora de salida y el valor por día de almacenamiento o por horas; al final, 
debe mostrar el monto a pagar por el tiempo que estuvo guardada en el casillero y notificar la liberación de este espacio.*/

class Locker {
  constructor(n, c, fe, fs, v, d) {
    this.nombre = n;
    this.casillero = c; //número de casillero
    this.fechaE = fe; //fecha y hora de entrada
    this.fechaS = fs; //fecha y hora de salida
    this.valor = v; //valor por día (o hora) de almacenamiento
    this.devuelta = d;
  }
}
class Casillero {
  constructor(n) {
    this.numero = n;
    this.texto = "Casillero " + n;
  }
}
let lockers = [],
  timeDiff = 0,
  casiD = [],
  existe = 0,
  existeC = 0,
  seconds = 0;
const nombreU = document.getElementById("nombreUsuario"),
  casillerosD = document.getElementById("casillerosDisponibles"),
  casillerosDD = document.getElementById("casillerosDisponibles2"),
  numeroC = document.getElementById("numeroCasillero"),
  parF = document.getElementById("parrafoFinal"),
  btn = document.getElementById("buttonDatos");
for (i = 1; i <= 10; i++) {
  casiD.push(new Casillero(String(i)));
}
btn.addEventListener("click", function () {
  if (nombreU.value && (numeroC.value > 0) & (numeroC.value <= 10)) {
    numeroC.value = Math.floor(numeroC.value);
    existe = false;
    existeC = false;
    for (i = 0; i < lockers.length; i++) {
      if (
        !(nombreU.value == lockers[i].nombre) &&
        numeroC.value == lockers[i].casillero
      ) {
        parF.innerHTML =
          "Ese casillero ya esta siendo utilizado, intente con otro!";
        existeC = true;
      }
    }
    if (!existeC) {
      for (i = 0; i < lockers.length; i++) {
        if (
          nombreU.value == lockers[i].nombre &&
          numeroC.value == lockers[i].casillero
        ) {
          existe = true;
          if (lockers[i].devuelta) {
            lockers[i].fechaE = new Date();
            lockers[i].fechaS = "Aun no ha salido.";
            lockers[i].devuelta = false;
            parF.innerHTML =
              "Su bicicleta ha sido entregada con exito, retirela cuando guste!";
            for (i = 0; i < casiD.length; i++) {
              if (numeroC.value == casiD[i].numero) {
                casillerosDD.innerHTML += casiD[i].texto + "<br>";
              }
            }
          } else {
            lockers[i].fechaS = new Date();
            timeDiff = lockers[i].fechaS - lockers[i].fechaE;
            timeDiff /= 1000;
            seconds = Math.round(timeDiff);
            parF.innerHTML =
              "Gracias por confiarnos su bicicleta!<br>Monto a pagar: $" +
              seconds * 100;
            lockers[i].devuelta = true;
            for (i = 0; i < casiD.length; i++) {
              if (numeroC.value == casiD[i].numero) {
                casillerosDD.innerHTML = casillerosDD.innerHTML.replace(
                  casiD[i].texto + "<br>",
                  ""
                );
              }
            }
          }
        }
      }
      if (!existe) {
        casillerosD.innerHTML =
          "Actualmente se encuentran ocupados los siguientes casilleros: <br>";
        for (i = 0; i < casiD.length; i++) {
          if (numeroC.value == casiD[i].numero) {
            casillerosDD.innerHTML += casiD[i].texto + "<br>";
            lockers.push(
              new Locker(
                nombreU.value,
                numeroC.value,
                new Date(),
                "Aun no ha salido.",
                100,
                false
              )
            );
            parF.innerHTML =
              "Su bicicleta ha sido entregada con exito, retirela cuando guste!";
          }
        }
      }
    }
  } else if (numeroC.value <= 0) {
    parF.innerHTML = "Por favor, introduzca números de casilleros validos.";
  } else if (numeroC.value > 10) {
    parF.innerHTML =
      "Solo tenemos " + casiD.length + " casilleros disponibles.";
  } else {
    parF.innerHTML = "Ha dejado campos vacios, por favor completelos.";
  }
});
