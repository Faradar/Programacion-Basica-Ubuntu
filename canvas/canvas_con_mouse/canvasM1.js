let cnvs = document.getElementById("cnvs_Dibujo"),
  btn = document.getElementById("btn_Dibujo"),
  ctx = cnvs.getContext("2d"),
  wid = cnvs.width,
  hei = cnvs.height,
  clr = "blue";
dibujarBorde();
window.addEventListener("contextmenu", (e) => e.preventDefault());
cnvs.addEventListener("mousemove", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  if (e.buttons == 1) {
    //click izquierdo
    dibujar(clr, x, y, x + 2, y + 2);
  }
  if (e.buttons == 2) {
    //click derecho
    ctx.clearRect(x, y, 10, 10); //se puede borrar con click derecho
  }
});
btn.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, wid, hei);
  dibujarBorde();
});
function dibujar(color, x, y, xf, yf) {
  ctx.beginPath();
  ctx.strokeStyle = color;
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
