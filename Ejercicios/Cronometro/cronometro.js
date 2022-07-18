//algoritmo de un reloj
//60 minutos, 60 segundos, 24 horas
//debe reiniciarse solo
//cada 5 minutos debe agregar 10 minutos mas a su cuenta total

let segundos = 55,
  minutos = 19,
  horas = 0,
  txt0 = document.getElementById("txt");
setInterval(function () {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
    if (minutos % 5 == 0) {
      minutos = minutos + 10;
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
