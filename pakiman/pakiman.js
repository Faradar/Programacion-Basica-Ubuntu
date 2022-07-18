// cauchin
// tocinauro
// pokacho
// las imagenes trata de agarrarlas de otra carpeta

class Pakiman {
  constructor(n, t, a, v) {
    this.nombre = n;
    this.tipo = t;
    this.ataque = a;
    this.vida = v;
    this.img = new Image();
    this.img.src = img[this.nombre];
  }
  mostrar() {
    document.body.appendChild(this.img);
    document.write("<br><strong>" + this.nombre + "</strong><br>");
    document.write("Tipo: " + this.tipo + "<br>");
    document.write("Ataque: " + this.ataque + "<br>");
    document.write("Vida: " + this.vida + "<br>");
  }
}
let img = [];
img["Cauchín"] = "../villaPlatzi/vaca.png";
img["Tocinauro"] = "../villaPlatzi/cerdo.png";
img["Pokacho"] = "../villaPlatzi/pollo.png";
let coleccion = [];
coleccion.push(new Pakiman("Cauchín", "Planta", 100, 30));
coleccion.push(new Pakiman("Tocinauro", "Tierra", 80, 50));
coleccion.push(new Pakiman("Pokacho", "Aire", 90, 40));
/*
otra forma de hacer las variables que creo arriba
let cauchin = new Pakiman("Cauchín", "Planta", 100, 30),
    tocinauro = new Pakiman("Tocinauro", "Tierra", 80, 50),
    pokacho = new Pakiman("Pokacho", "Aire", 90, 40),
    coleccion = [cauchin, tocinauro, pokacho];
otra forma de hacer el array que puse arriba
let coleccion = [];
coleccion.push(cauchin);
coleccion.push(tocinauro);
coleccion.push(pokacho);
*/
for (let i = 0; i < coleccion.length; i++) {
  coleccion[i].mostrar();
}
/* otras formas de hacer lo de arriba
for(let i in coleccion){ //indice
    coleccion[i].mostrar();
}
for(let i of coleccion){ //objeto
    i.mostrar();
}
for(let i in coleccion[0]){ //atributos del objeto
console.log(i);
}
*/
