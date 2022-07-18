// Escribe una función recursiva para generar un password aleatorio con 20 caracteres combinando letras-números-símbolos-números-letras-día-new-año.

const caracteres = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    ["0","1","2","3","4","5","6","7","8","9"],
    ["°", "|", "¬", "!", "\"", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "'", "¡", "\\", "´", "¨", "+", "*", "~", "{", "[", "^", "}", "]", "`", "<", ">", ",", ";", ".", ":", "-", "_"]
];
let pass = "";
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min; // Ecuacion para producir un numero aleatorio entre min y max
}
function newPassword(){
    for(i = 0 ; i < 20 ; i++){
        let i = aleatorio(0, caracteres.length);
        let character = caracteres[i][aleatorio(0, caracteres[i].length)];
        pass += character;
    }
    document.write("Su nueva contraseña es: " + pass);
}
newPassword();

/*const caracteres = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    ["0","1","2","3","4","5","6","7","8","9"],
    ["!","#","$","&","/","(",")","*","+","-",".","_",","]
]
let pass="";
function ramdom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function newPassword(cont=0){
    let i = ramdom(0,caracteres.length)
    let character = caracteres[i][ramdom(0,caracteres[i].length)]
    pass += character;
    cont++;
    if(cont === 20){
        console.log("Su nueva contraseña es: " + pass);
        return
    }
    newPassword(cont);
}
newPassword();*/