// Converti de minúscula a mayúscula el primer y último carácter de un string.

/*let first = 0,
    last = 0;
function minma(string){
    first = string.charAt(0).toUpperCase(); //primera letra a uppercase
    last = string.charAt(string.length-1).toUpperCase(); //ultima letra a uppercase
    string = first + string.substr(1, string.length-2) + last; //ahora a string le remuevo su primer y ultima letra, y luego le sumo esas letras alteradas
    document.write(string);
}
minma("hola carola");*/

let first = 0,
  last = 0,
  string = "hola carola";
first = string.charAt(0).toUpperCase(); //primera letra a uppercase
last = string.charAt(string.length - 1).toUpperCase(); //ultima letra a uppercase
string = first + string.substr(1, string.length - 2) + last; //ahora a string le remuevo su primer y ultima letra, y luego le sumo esas letras alteradas
document.write(string);
