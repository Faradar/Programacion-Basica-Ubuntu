/*Se desea automatizar la toma de pedidos en un restaurante. 
El pedido debe llegar a la cocina indicando la información de la mesa a la que se le tomó el pedido, 
el nombre del cliente, los productos que solicitó, la cantidad y la fecha y hora. 
Cada pedido debe ser despachado en el orden en que fue tomado.*/

class Pedido {
  constructor(m, n, p, c, f, h) {
    this.mesa = m;
    this.nombre = n;
    this.productos = p;
    this.cantidad = c;
    this.fecha = f;
    this.hora = h;
  }
}
let pedidos = [],
  numeroM = document.getElementById("numeroMesa"),
  nombreA = document.getElementById("nombreApellido"),
  productosS = document.getElementById("productosSolicitados"),
  cantidadP = document.getElementById("cantidadProductos"),
  btn = document.getElementById("buttonPedido");
btn.addEventListener("click", function () {
  const d = new Date();
  pedidos.push(
    new Pedido(
      parseInt(numeroM.value),
      nombreA.value,
      productosS.value,
      parseInt(cantidadP.value),
      d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(),
      d.getHours() + ":" + d.getMinutes()
    )
  );
  console.log(pedidos);
});
