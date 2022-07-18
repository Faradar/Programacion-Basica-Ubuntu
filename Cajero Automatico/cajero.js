// que los billetes entregados sean representados por fotos de los billetes
// que la cantidad sea limitada y se vaya quedando vacia a medida que es usada
// declarar en algun lugar de la ventana cuanto dinero tiene el ATM
// declarar en algun lugar de la ventana cuanto dinero he ido entregando por cada sesion
// que el programa sepa cuando no tiene suficientes billetes para el valor que le pedis
// que el programa sepa cuando tiene suficientes billetes pero no puede alcanzar el valor que le pedis (ejemplo, 105)
// que el programa sepa cuando se piden numeros negativos

class Billete {
  constructor(v, c, s) {
    this.valor = v;
    this.cantidad = c;
    this.img = new Image();
    this.img.width = 200;
    this.img.src = s;
  }
}
let billetes = [
    new Billete(100, 50, "100 dollar bill.jpg"),
    new Billete(50, 50, "50 dollar bill.jpg"),
    new Billete(20, 50, "20 dollar bill.jpg"),
    new Billete(10, 50, "10 dollar bill.jpg"),
  ],
  entregado = [],
  input = 0,
  input2 = 0,
  div = 0,
  papeles = 0,
  total = 0,
  sesiones = 0,
  dinero = 0,
  label = document.getElementById("label_txtPlata"),
  txt = document.getElementById("txtPlata"),
  btn = document.getElementById("btnPlata"),
  par = document.getElementById("parrafo"),
  par2 = document.getElementById("parrafo2");
for (i = 0; i < billetes.length; i++) {
  total += billetes[i].valor * billetes[i].cantidad;
}
label.innerHTML = "Cuanta plata desea retirar?<br>Dinero disponible: " + total;
btn.addEventListener("click", function () {
  input = parseInt(txt.value);
  input2 = input;
  par.innerHTML = "";
  entregado = [];
  dinero = 0;
  sesiones++;
  if (input < 0) {
    par.innerHTML = "No puedo aceptar dinero, solo entregarlo.";
    par2.innerHTML += "En la sesion " + sesiones + " se han entregado $0<br>";
  } else {
    for (i = 0; i < billetes.length; i++) {
      if (input > 0 && input <= total) {
        div = Math.floor(input / billetes[i].valor);
        if (div > billetes[i].cantidad) {
          papeles = billetes[i].cantidad;
        } else {
          papeles = div;
        }
        entregado.push(
          new Billete(billetes[i].valor, papeles, billetes[i].img.src)
        );
        input -= billetes[i].valor * papeles;
      }
    }
    if (input > 0 && input < 10 && total >= 10) {
      par.innerHTML = "No puedo darte billetes de ese tipo.";
      par2.innerHTML += "En la sesion " + sesiones + " se han entregado $0<br>";
    } else if (input > 0) {
      par.innerHTML = "No tengo suficientes billetes.";
      par2.innerHTML += "En la sesion " + sesiones + " se han entregado $0<br>";
    } else {
      for (i = 0; i < entregado.length; i++) {
        billetes[i].cantidad -= entregado[i].cantidad;
        dinero += entregado[i].valor * entregado[i].cantidad;
        if (entregado[i].cantidad > 0) {
          //par.innerHTML += "Usted ha recibido " + entregado[i].cantidad + " billetes de " + entregado[i].valor + " pesos <br>";
          for (h = 0; h < entregado[i].cantidad; h++) {
            par.appendChild(entregado[i].img.cloneNode());
          }
        }
      }
      total -= input2;
      label.innerHTML =
        "Cuanta plata desea retirar?<br>Dinero disponible: " + total;
      par2.innerHTML +=
        "En la sesion " + sesiones + " se han entregado $" + dinero + "<br>";
    }
  }
});
