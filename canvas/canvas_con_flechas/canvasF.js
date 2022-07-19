let cnvs = document.getElementById("cnvs_Dibujo"),
  ctx = cnvs.getContext("2d"),
  wid = cnvs.width,
  hei = cnvs.height,
  x = wid / 2,
  y = hei / 2,
  clr = "blue",
  movimiento = 10,
  keys = [];
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
function dibujar(clr, x, y, xf, yf) {
  ctx.beginPath();
  ctx.strokeStyle = clr;
  ctx.lineWidth = 3;
  ctx.moveTo(x, y);
  ctx.lineTo(xf, yf);
  ctx.closePath();
  ctx.stroke();
}
function dibujarBorde() {
  dibujar(clr, 0, 0, wid, 0);
  dibujar(clr, 0, 0, 0, hei);
  dibujar(clr, 0, hei, wid, hei);
  dibujar(clr, wid, hei, wid, 0);
}
dibujarBorde();
function keysPressed(e) {
  //ctx.clearRect(0,0,wid,hei);
  keys[e.code] = true;
  /*if(x < 3){
        x = 297
    }
    if(x > 297){
        x = 3
    }
    if(y < 3){
        y = 297
    }
    if(y > 297){
        y = 3
    }*/
  if (x < 3) {
    x = 3;
  }
  if (x > 297) {
    x = 297;
  }
  if (y < 3) {
    y = 3;
  }
  if (y > 297) {
    y = 297;
  } //Estos if son para que al llegar a los limites del canvas no se dibuje mas
  if (keys["ArrowLeft"] && keys["ArrowUp"]) {
    dibujar(clr, x, y, x - movimiento, y - movimiento);
    x = x - movimiento;
    y = y - movimiento;
  }
  if (keys["ArrowLeft"] && keys["ArrowDown"]) {
    dibujar(clr, x, y, x - movimiento, y + movimiento);
    x = x - movimiento;
    y = y + movimiento;
  }
  if (keys["ArrowRight"] && keys["ArrowUp"]) {
    dibujar(clr, x, y, x + movimiento, y - movimiento);
    x = x + movimiento;
    y = y - movimiento;
  }
  if (keys["ArrowRight"] && keys["ArrowDown"]) {
    dibujar(clr, x, y, x + movimiento, y + movimiento);
    x = x + movimiento;
    y = y + movimiento;
  }
  if (keys["ArrowLeft"] && !keys["ArrowUp"] && !keys["ArrowDown"]) {
    dibujar(clr, x, y, x - movimiento, y);
    x = x - movimiento;
  }
  if (keys["ArrowUp"] && !keys["ArrowLeft"] && !keys["ArrowRight"]) {
    dibujar(clr, x, y, x, y - movimiento);
    y = y - movimiento;
  }
  if (keys["ArrowRight"] && !keys["ArrowUp"] && !keys["ArrowDown"]) {
    dibujar(clr, x, y, x + movimiento, y);
    x = x + movimiento;
  }
  if (keys["ArrowDown"] && !keys["ArrowLeft"] && !keys["ArrowRight"]) {
    dibujar(clr, x, y, x, y + movimiento);
    y = y + movimiento;
  }
  //e.preventDefault(); // Prevents your browser from reacting to any keyboard events as long as your page has focus
}
function keysReleased(e) {
  keys[e.code] = false;
}
