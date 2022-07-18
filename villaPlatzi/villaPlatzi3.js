let cnvs = document.getElementById("cnvs_Dibujo"),
    txt0 = document.getElementById("txt_Dibujo0"),
    txt1 = document.getElementById("txt_Dibujo1"),
    txt2 = document.getElementById("txt_Dibujo2"),
    txt = [txt0, txt1, txt2]
    ctx = cnvs.getContext("2d"),
    xv = [], // posicion en x de la vaca y asi para los demas
    yv = [],
    xc = [],
    yc = [],
    xp = [],
    yp = [],
    der = false,
    wid = cnvs.width,
    hei = cnvs.height,
    movimiento = 10,
    cantidad = [aleatorio(5,25), aleatorio(5,25), aleatorio(5,25)],
    imgFondo = new Image(), // poner "new Image()" es lo mismo que poner "document.createElement("img")"
    imgVaca = new Image(),
    imgCerdo = new Image(),
    imgPollo = new Image(),
    keys = [],
    img = [imgVaca, imgCerdo, imgPollo], // la posicion 0 la ocupa la vaca y asi para los demas
    nombre = ["vacas", "cerdos", "pollos"];
imgFondo.src = "tile.png";
imgVaca.src = "vaca.png";
imgCerdo.src = "cerdo.png";
imgPollo.src = "pollo.png";
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
window.onload = function() {
    ctx.drawImage(imgFondo, 0, 0);
    for(i = 0 ; i < img.length ; i++){
        for(h = 0 ; h < cantidad[i] ; h++){
            x = aleatorio(0,7) * 60,
            y = aleatorio(0,7) * 60;
            ctx.drawImage(img[i], x, y);
            if(i == 0){ // cuando i = 0, estamos hablando de las vacas y asi para los demas
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
        txt[i].innerHTML = "Hay " + cantidad[i] + " " + nombre[i];
    }
};
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
        reDibujar();
        x = x - movimiento;
        movimientoIzq(x,y)
    }
    if(keys["ArrowUp"]){
        ctx.clearRect(0,0,wid,hei);
        reDibujar();
        y = y - movimiento;
        if(der == true){
            movimientoDer(imgPollo,x,y);
        } else{
            movimientoIzq(x,y)
        }
    }
    if(keys["ArrowRight"]){
        ctx.clearRect(0,0,wid,hei);
        reDibujar();
        x = x + movimiento;
        movimientoDer(imgPollo,x,y);
    }
    if(keys["ArrowDown"]){
        ctx.clearRect(0,0,wid,hei);
        reDibujar();
        y = y + movimiento;
        if(der == true){
            movimientoDer(imgPollo,x,y);
        } else{
            movimientoIzq(x,y)
        }
    }
}
function keysReleased(e) {
    keys[e.code] = false;
}
function reDibujar(){
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
    }
}
function movimientoIzq(x,y)
{
    ctx.drawImage(imgPollo, x, y);
    der = false
}
function movimientoDer(img,x,y)
{
    ctx.translate(x+img.width,y); // move to x + img's width
    ctx.scale(-1,1); // scaleX by -1; this "trick" flips horizontally
    ctx.drawImage(img,0,0);  // draw the img // no need for x,y since we've already translated
    ctx.setTransform(1,0,0,1,0,0); // always clean up -- reset transformations to default
    der = true
}