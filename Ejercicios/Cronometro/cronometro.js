//algoritmo de un reloj
//60 minutos, 60 segundos, 24 horas
//debe reiniciarse solo
//cada 5 minutos debe agregar 10 minutos mas a su cuenta total

/*
let segundos = 55,
  minutos = 19,
  horas = 0,
  txt0 = document.getElementById("txt");
setInterval(function () {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
    } else if (minutos == 60) {
      minutos = 0;
      horas++;
      if (horas == 24) {
        horas = 0;
      }
    }
  }
  txt0.innerHTML = "La hora es: " + horas + ":" + minutos + ":" + segundos;
}, 1000);
*/

let tipo = [0, 0, 0], // segundos, minutos, horas
  limite = [60, 60, 24],
  txt0 = document.getElementById("txt");
setInterval(function () {
  tipo[0]++;
  validar(0);
  validar(1);
  validar(2);
  txt0.innerHTML = "La hora es: " + tipo[2] + ":" + tipo[1] + ":" + tipo[0];
}, 1000);
function validar(a) {
  if (tipo[a] == limite[a]) {
    tipo[a] = 0;
    tipo[a + 1]++;
  }
}
