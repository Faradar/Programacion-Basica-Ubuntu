class Animal {
  constructor(n, s) {
    this.nombre = n;
    this.posicionX = [];
    this.posicionY = [];
    this.cantidad = [aleatorio(5, 25)];
    this.imagen = new Image();
    this.imagen.src = s;
  }
}
let animales = [
    new Animal("Vaca", "vaca.png"),
    new Animal("Cerdo", "cerdo.png"),
    new Animal("Pollo", "pollo.png"),
  ],
  polloJugable = new Animal(
    "Pollo Jugable",
    "pollo.png"
  ) /* Si en lugar de crear otro objeto quiero acceder a uno especifico, creo una variables que no sea un array para acceder 
    especificamente a ese y no tenga que escribir cosas como animales[2] que no es muy legible en el codigo, por ejemplo: polloJugable = animales[2],*/,
  cnvs = document.getElementById("cnvs_Dibujo"),
  txt = document.getElementById("txt_Dibujo"),
  ctx = cnvs.getContext("2d"),
  wid = cnvs.width,
  hei = cnvs.height,
  movimiento = 10,
  keys = [],
  fondo = new Image();
fondo.src = "tile.png";
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
window.onload = function () {
  ctx.drawImage(fondo, 0, 0);
  for (i = 0; i < animales.length; i++) {
    for (h = 0; h < animales[i].cantidad; h++) {
      (x = aleatorio(0, 7) * 60), (y = aleatorio(0, 7) * 60);
      ctx.drawImage(animales[i].imagen, x, y);
      animales[i].posicionX[h] = x;
      animales[i].posicionY[h] = y;
    }
    txt.innerHTML +=
      "Hay " + animales[i].cantidad + " " + animales[i].nombre + "<br>";
  }
};
function aleatorio(min, max) {
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min; // Ecuacion para producir un numero aleatorio entre min y max
  return resultado;
}
function keysPressed(e) {
  keys[e.code] = true;
  if (keys["ArrowLeft"]) {
    ctx.clearRect(0, 0, wid, hei);
    reDibujar();
    x = x - movimiento;
    movimientoIzq(x, y);
  }
  if (keys["ArrowUp"]) {
    ctx.clearRect(0, 0, wid, hei);
    reDibujar();
    y = y - movimiento;
    if (der == true) {
      movimientoDer(polloJugable.imagen, x, y);
    } else {
      movimientoIzq(x, y);
    }
  }
  if (keys["ArrowRight"]) {
    ctx.clearRect(0, 0, wid, hei);
    reDibujar();
    x = x + movimiento;
    movimientoDer(polloJugable.imagen, x, y);
  }
  if (keys["ArrowDown"]) {
    ctx.clearRect(0, 0, wid, hei);
    reDibujar();
    y = y + movimiento;
    if (der == true) {
      movimientoDer(polloJugable.imagen, x, y);
    } else {
      movimientoIzq(x, y);
    }
  }
}
function keysReleased(e) {
  keys[e.code] = false;
}
function reDibujar() {
  ctx.drawImage(fondo, 0, 0);
  for (i = 0; i < animales.length; i++) {
    for (h = 0; h < animales[i].cantidad; h++) {
      ctx.drawImage(
        animales[i].imagen,
        animales[i].posicionX[h],
        animales[i].posicionY[h]
      );
    }
  }
}
function movimientoIzq(x, y) {
  ctx.drawImage(polloJugable.imagen, x, y);
  der = false;
}
function movimientoDer(img, x, y) {
  ctx.translate(x + img.width, y); // move to x + img's width
  ctx.scale(-1, 1); // scaleX by -1; this "trick" flips horizontally
  ctx.drawImage(img, 0, 0); // draw the img // no need for x,y since we've already translated
  ctx.setTransform(1, 0, 0, 1, 0, 0); // always clean up -- reset transformations to default
  der = true;
}
