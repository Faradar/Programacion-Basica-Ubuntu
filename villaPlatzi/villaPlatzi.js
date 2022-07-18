//dibujar mapa del fondo
// dibujar en el mapa del fondo, el pollo, la vaca y el cerdo

let cnvs = document.getElementById("cnvs_Dibujo"),
    ctx = cnvs.getContext("2d"),
    x = 0,
    y = 0,
    cantidad = [aleatorio(5,25), aleatorio(5,25), aleatorio(5,25)],
    imgFondo = new Image(), // poner "new Image()" es lo mismo que poner "document.createElement("img")"
    imgVaca = new Image(),
    imgCerdo = new Image(),
    imgPollo = new Image(),
    img = [imgVaca, imgCerdo, imgPollo],
    nombre = ["vacas", "cerdos", "pollos"];
imgFondo.src = "tile.png";
imgVaca.src = "vaca.png";
imgCerdo.src = "cerdo.png";
imgPollo.src = "pollo.png";
window.onload = function() {
    ctx.drawImage(imgFondo, 0, 0);
    for(i = 0 ; i < img.length ; i++){
        for(h = 0 ; h < cantidad[i] ; h++){
            x = aleatorio(0,7) * 60,
            y = aleatorio(0,7) * 60;
            ctx.drawImage(img[i], x, y);
        }
        console.log("Hay " + cantidad[i] + " " + nombre[i]);
    }
};
function aleatorio(min, max)
{
    let resultado;
    resultado =  Math.floor(Math.random() * (max - min + 1)) + min; // Ecuacion para producir un numero aleatorio entre min y max
    return resultado;
}