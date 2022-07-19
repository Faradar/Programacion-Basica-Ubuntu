// Que el usuario nos diga su peso y luego lo calculamos en diferentes planetas

const gTierra = 9.8,
  gravedad = [3.71, 24.7, 1.62]; //marte, jupiter, luna
let pTierra = 0,
  pYPlaneta = 0,
  txt = document.getElementById("txt"),
  boton = document.getElementById("boton"),
  parrafo1 = document.getElementById("parrafo1"),
  parrafo2 = document.getElementById("parrafo2"),
  parrafo3 = document.getElementById("parrafo3"),
  parrafo = [parrafo1, parrafo2, parrafo3],
  planetas = ["Marte", "Jupiter", "Luna"];
boton.addEventListener("click", pPlaneta);

function pPlaneta() {
  for (let i = 0; i < gravedad.length; i++) {
    // Una alternativa a esa funcion podria ser: for (let i in gravedad) {
    pTierra = parseFloat(txt.value);
    pYPlaneta = ((gravedad[i] * pTierra) / gTierra).toFixed(2);
    parrafo[i].innerHTML =
      "<mark>Tu peso en el planeta " +
      planetas[i] +
      " es " +
      pYPlaneta +
      " Kg</mark>";
  }
}
