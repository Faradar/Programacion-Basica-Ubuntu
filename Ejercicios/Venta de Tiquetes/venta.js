// En una empresa de viajes se requiere realizar la venta de tiquetes teniendo en cuenta las siguientes consideraciones:
// Cada tiquete incluye ciudad de origen, ciudad de destino, fecha, hora, cantidad de puestos y datos del pasajero.
// Cada autobús o avión tiene una capacidad máxima de pasajeros, debo avisar cuando se hayan llenado los cupos.
// Debes asignar los puestos de cada medio de transporte conforme al orden de compra

class Tiquete {
  constructor(co, cd, f, h, p, d) {
    this.ciudadO = co;
    this.ciudadD = cd;
    this.fecha = f;
    this.hora = h;
    this.puesto = p;
    this.datos = d;
  }
}
let tiquetes = [],
  bus = 5, //pasajeros que admite el autobús
  puesto = 0,
  txt0 = document.getElementById("txt_origen"),
  txt1 = document.getElementById("txt_destino"),
  txt2 = document.getElementById("txt_fecha"),
  txt3 = document.getElementById("txt_hora"),
  txt4 = document.getElementById("txt_datos"),
  par = document.getElementById("parrafo"),
  btn = document.getElementById("button");
btn.addEventListener("click", function () {
  if (bus > 0) {
    puesto++;
    tiquetes.push(
      new Tiquete(
        txt0.value,
        txt1.value,
        txt2.value,
        txt3.value,
        puesto,
        txt4.value
      )
    );
    bus -= 1;
    par.innerHTML =
      "Muchas gracias por la compra de su tiquete!<br><br>Los datos de su tiquete son:<br>";
    par.innerHTML += "Ciudad de Origen: " + txt0.value + "<br>";
    par.innerHTML += "Ciudad de Destino: " + txt1.value + "<br>";
    par.innerHTML += "Fecha del viaje: " + txt2.value + "<br>";
    par.innerHTML += "Hora del viaje: " + txt3.value + "<br>";
    par.innerHTML += "Asiento: " + puesto + "<br>";
    par.innerHTML += "Nombre y Apellido: " + txt4.value + "<br>";
  } else {
    par.innerHTML = "Lo sentimos, todos los puestos estan ocupados.";
  }
});
