// Que el usuario nos diga en que planeta quiere saber su peso y luego nos diga su peso

const gTierra = 9.8,
  gravedad = [3.71, 24.7, 1.62]; //marte, jupiter, luna
let pTierra = 0,
  pYPlaneta = 0,
  txt = document.getElementById("txt"),
  boton = document.getElementById("boton"),
  planetas = document.getElementById("planetas"),
  parrafo1 = document.getElementById("parrafo1"),
  img = document.getElementById("img");
boton.addEventListener("click", pPlaneta);

function pPlaneta() {
  pTierra = parseFloat(txt.value);
  img.width = "200";
  img.height = "200";
  switch (planetas.value) {
    case "marte":
      pYPlaneta = ((gravedad[0] * pTierra) / gTierra).toFixed(2);
      parrafo1.innerHTML =
        "<mark>Marte</mark></h2><p><mark>Tu peso en Marte es " +
        pYPlaneta +
        " Kg</mark></p>";
      img.src = "../carpeta con fotos/marte.jpg";
      break;
    case "jupiter":
      pYPlaneta = ((gravedad[1] * pTierra) / gTierra).toFixed(2);
      parrafo1.innerHTML =
        "<mark>Jupiter</mark></h2><p><mark>Tu peso en Jupiter es " +
        pYPlaneta +
        " Kg</mark></p>";
      img.src = "../carpeta con fotos/jupiter.jpg";
      break;
    case "luna":
      pYPlaneta = ((gravedad[2] * pTierra) / gTierra).toFixed(2);
      parrafo1.innerHTML =
        "<mark>Luna</mark></h2><p><mark>Tu peso en la Luna es " +
        pYPlaneta +
        " Kg</mark></p>";
      img.src = "../carpeta con fotos/luna.png";
      break;
    default:
      break;
  }
}
