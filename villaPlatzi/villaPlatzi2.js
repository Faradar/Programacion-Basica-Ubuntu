// mover un pollo con las flechas del teclado

let cnvs = document.getElementById("cnvs_Dibujo"),
    ctx = cnvs.getContext("2d"),
    xv = [],
    yv = [],
    xc = [],
    yc = [],
    xp = [],
    yp = [],
    wid = cnvs.width,
    hei = cnvs.height,
    movimiento = 10,
    cantidad = [aleatorio(5,25), aleatorio(5,25), aleatorio(5,25)],
    imgFondo = new Image(), // poner "new Image()" es lo mismo que poner "document.createElement("img")"
    imgVaca = new Image(),
    imgCerdo = new Image(),
    imgPollo = new Image(),
    keys = [],
    img = [imgVaca, imgCerdo, imgPollo],
    nombre = ["vacas", "cerdos", "pollos"];
imgFondo.src = "tile.png";
imgVaca.src = "vaca.png";
imgCerdo.src = "cerdo.png";
imgPollo.src = "pollo.png";
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
window.addEventListener("load", imagenes);
function aleatorio(min, max)
{
    let resultado;
    resultado =  Math.floor(Math.random() * (max - min + 1)) + min; // Ecuacion para producir un numero aleatorio entre min y max
    return resultado;
}
function keysPressed(e){
    keys[e.code] = true;
    if(keys["ArrowLeft"]){
        ctx.clearRect(0,0,wid,hei);
        imagenes2();
        x = x - movimiento;
        ctx.drawImage(imgPollo, x, y);
    }
    if(keys["ArrowUp"]){
        ctx.clearRect(0,0,wid,hei);
        imagenes2();
        y = y - movimiento;
        ctx.drawImage(imgPollo, x, y);
    }
    if(keys["ArrowRight"]){
        ctx.clearRect(0,0,wid,hei);
        imagenes2();
        x = x + movimiento;
        ctx.drawImage(imgPollo, x, y);
    }
    if(keys["ArrowDown"]){
        ctx.clearRect(0,0,wid,hei);
        imagenes2();
        y = y + movimiento;
        ctx.drawImage(imgPollo, x, y);
    }
}
function keysReleased(e) {
    keys[e.code] = false;
}
function imagenes(){
    ctx.drawImage(imgFondo, 0, 0);
    for(i = 0 ; i < img.length ; i++){
        for(h = 0 ; h < cantidad[i] ; h++){
            x = aleatorio(0,7) * 60,
            y = aleatorio(0,7) * 60;
            ctx.drawImage(img[i], x, y);
            if(i == 0){
                xv[h] = x;
                yv[h] = y;
            }
            if(i == 1){
                xc[h] = x;
                yc[h] = y;
            }
            if(i == 2){
                xp[h] = x;
                yp[h] = y;
            }
        }
        console.log("Hay " + cantidad[i] + " " + nombre[i]);
    }
}
function imagenes2(){
    ctx.drawImage(imgFondo, 0, 0);
    for(i = 0 ; i < img.length ; i++){
        for(h = 0 ; h < cantidad[i] ; h++){
            if(i == 0){
                ctx.drawImage(img[i], xv[h], yv[h]);
            }
            if(i == 1){
                ctx.drawImage(img[i], xc[h], yc[h]);
            }
            if(i == 2){
                ctx.drawImage(img[i], xp[h], yp[h]);
            }
        }
        console.log("Hay " + cantidad[i] + " " + nombre[i]);
    }
}