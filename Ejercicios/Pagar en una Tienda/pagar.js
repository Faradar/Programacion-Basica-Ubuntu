// En una tienda de ropa se necesita registrar el precio de cada prenda seleccionada y almacenarlo en una única cuenta de cobro por cliente.
// Cada cuenta de cobro debe indicar:
// Nombre del cliente
// Cantidad de prendas
// Tipo de prenda
// Valor unitario
// Valor total (valor unitario de la prenda multiplicado por la cantidad escogida)
// Valor total a pagar

class Cuenta {
  constructor(n, c, t, vu, vt) {
    this.nombre = n; // Nombre del Cliente
    this.cantidadP = c; // Cantidad de Prendas
    this.tipoP = t; // Tipo de prenda
    this.valorU = vu; // Valor unitario
    this.valorT = vt; // Valor total
  }
}
class Prenda {
  constructor(n, v, c) {
    this.nombre = n;
    this.valor = v;
    this.seleccion = c;
  }
}
let prendas = [
    new Prenda("Prenda A", 500, "prendaA"),
    new Prenda("Prenda B", 1000, "prendaB"),
    new Prenda("Prenda C", 1500, "prendaC"),
  ],
  cuentas = [],
  seleccion = document.getElementById("ropas"),
  cantidad = document.getElementById("cantidadPrendas"),
  cant = 0,
  nom = document.getElementById("nombreApellido"),
  nomExist = false,
  txt = document.getElementById("textFinal"),
  btn = document.getElementById("button");
btn.addEventListener("click", function () {
  cant = parseInt(cantidad.value);
  if (cant > 0 && nom.value) {
    for (i = 0; i < cuentas.length; i++) {
      if (nom.value == cuentas[i].nombre) {
        nomExist = true;
      } else {
        nomExist = false;
      }
    }
    for (i = 0; i < prendas.length; i++) {
      if (seleccion.value == prendas[i].seleccion) {
        if (nomExist) {
          for (h = 0; h < cuentas.length; h++) {
            if (nom.value == cuentas[h].nombre) {
              cuentas[h].valorT += prendas[h].valor * cant;
            }
          }
        } else {
          cuentas.push(
            new Cuenta(
              nom.value,
              cant,
              prendas[i].nombre,
              prendas[i].valor,
              prendas[i].valor * cant
            )
          );
        }
        txt.innerHTML =
          "<h3>Gracias por elegirnos " +
          nom.value +
          "!</h3>Usted eligio comprar " +
          cant +
          ' prenda/s "' +
          prendas[i].nombre +
          '" por un monto total de $' +
          prendas[i].valor * cant;
      }
    }
  } else {
    txt.innerHTML =
      "Lo sentimos, no podemos realizar esa transaccion. Intente comprar una prenda e ingresar su nombre.";
  }
  console.log(cuentas);
});
