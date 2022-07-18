// permitir que el usuario decida cuantas lineas quiere y que esto se dibuje con una caja de texto y un boton

let cnvs = document.getElementById("cnvs_Dibujo"),
  ctx = cnvs.getContext("2d"),
  txt = document.getElementById("txt_Lineas"),
  txt1 = document.getElementById("txt_size"),
  btn = document.getElementById("btn_Lineas"),
  color = document.getElementById("clr_Lineas"),
  sele = document.getElementById("sele_Dib"),
  clr = 0,
  line = 0,
  spacing = 0,
  wid = 0,
  hei = 0,
  x = 0,
  xf = 0,
  y = 0,
  yf = 0;
btn.addEventListener("click", dClick);
function dibujar(clr, x, y, xf, yf) {
  ctx.beginPath();
  ctx.strokeStyle = clr;
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
function dibujarAI() {
  line = parseInt(txt.value);
  spacing = wid / line;
  for (i = 0; i < line; i++) {
    y = i * spacing;
    xf = (i + 1) * spacing;
    dibujar(clr, 0, y, xf, hei); // Abajo Izquierda
  }
}
function dibujarT() {
  line = parseInt(txt.value);
  spacing = wid / line;
  for (i = 0; i < line; i++) {
    y = i * spacing;
    xf = (i + 1) * spacing;
    x = wid - i * spacing;
    dibujar(clr, 0, y, xf, hei); // Abajo Izquierda
    dibujar(clr, wid, y, x, hei); // Abajo Derecha
    dibujar(clr, x, 0, 0, xf); // Arriba Izquierda
    dibujar(clr, y, 0, wid, xf); // Arriba Derecha
  }
}
function dClick() {
  ctx.clearRect(0, 0, wid, hei);
  clr = color.value;
  cnvs.width = txt1.value;
  cnvs.height = txt1.value;
  wid = cnvs.width;
  hei = cnvs.height;
  if (sele.value == "t") {
    dibujarT();
  } else {
    dibujarAI();
  }
  dibujarBorde();
}
// en lugar del if/else puedo usar el switch para cambiar los dibujos como muestro aca abajo
/* switch(sele.value){
    case "t":
        dibujarT();
        break;
    case "ai":
        dibujarAI
        break;
} */
