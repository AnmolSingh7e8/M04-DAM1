//ejercicio 1
function substring(text){
    console.log(text)
    if(text.includes("As")){
        return console.log(text)
    } else {
        console.log("As"+text)
    }
}

substring("Asfffffffff")

//ejercicio 2
function comprobarLongitud(palabra, num){
    let texto = palabra.toString();
    if (num < texto.length) {
        let resultado = texto.slice(0, num) + texto.slice(num + 1);
        console.log(resultado);
    } else {
        console.log(texto);
    }
}

comprobarLongitud("paco", 3)

//ejercicio 3 
function cambioCaracteres(palabra) {
    let texto = palabra.toString();
    if (texto.length > 1) {
        let primerCaracter = texto.charAt(0); 
        let ultimoCaracter = texto.charAt(texto.length - 1);
        let resto = texto.slice(1, texto.length - 1);
    
        return ultimoCaracter + resto + primerCaracter;
    } else if (texto.length === 1) {
        return texto; 
    } else {
        console.log("No ha ninguna palabra")
    }
}

console.log(cambioCaracteres("texto"));