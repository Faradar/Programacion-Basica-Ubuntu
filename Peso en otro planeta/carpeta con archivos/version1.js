// Que el usuario nos diga su peso y luego lo calculamos en diferentes planetas

const gTierra = 9.8;
let texto = document.getElementById("txt"),
  texto2 = document.getElementById("txt2"),
  boton = document.getElementById("boton"),
  parrafo = document.getElementById("parrafo"),
  pTierra = 0,
  gYPlaneta = 0,
  pYPlaneta = 0;
boton.addEventListener("click", pPlaneta);

function pPlaneta() {
  pTierra = parseFloat(texto.value);
  gYPlaneta = parseFloat(texto2.value);
  pYPlaneta = ((gYPlaneta * pTierra) / gTierra).toFixed(2);
  parrafo.innerHTML = "Tu peso en ese planeta es " + pYPlaneta + " Kg";
}
