// Que el usuario nos diga en que planeta quiere saber su peso y luego nos diga su peso

const gTierra = 9.8,
  gravedad = [3.71, 24.7, 1.62]; //marte, jupiter, luna
let pTierra = 0,
  pYPlaneta = 0,
  txt = document.getElementById("txt"),
  boton = document.getElementById("boton"),
  planetas = document.getElementsByName("planetas"),
  parrafo = document.getElementById("parrafo"),
  img = document.getElementById("img"),
  imagen = [];
imagen.push("../carpeta con fotos/marte.jpg");
imagen.push("../carpeta con fotos/jupiter.jpg");
imagen.push("../carpeta con fotos/luna.png");
boton.addEventListener("click", pPlaneta);

function pPlaneta() {
  pTierra = parseFloat(txt.value);
  img.width = "200";
  img.height = "200";
  for (let i = 0; i < planetas.length; i++) {
    if (planetas[i].checked) {
      pYPlaneta = ((gravedad[i] * pTierra) / gTierra).toFixed(2);
      parrafo.innerHTML =
        "<mark>" +
        planetas[i].value +
        "</mark></h2><p><mark>Tu peso en el planeta " +
        planetas[i].value +
        " es " +
        pYPlaneta +
        " Kg</mark></p>";
      img.src = imagen[i];
    }
  }
}
