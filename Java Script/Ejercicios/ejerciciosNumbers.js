//ej1

function numeroMayor(num1, num2){
    if(num1>num2){
        return(num1)
    } else {
        return(num2)
    }
}
console.log("Ejercicio 1: " + numeroMayor(2,4))
console.log("Ejercicio 1: " + numeroMayor(5,4))

//ej2
function multiplicacionSin(num3, num4){
    var multip = 0
    for(var i = 0; i < num4; i++){
        multip += num3;
    }
    return multip
}
console.log("Ejercicio 2: " + multiplicacionSin(2,3))

//ej3

function multiplicacion3(num1, num2, num3){
    var multip = 0
    for(var i = 0; i < num3; i++){
        multip += multiplicacionSin(num1, num2)
    }
    return multip
}

console.log("Ejercicio 3: " + multiplicacion3(1,2,3))

//ej4

function media3(nota1, nota2, nota3){
    var media = (nota1+nota2+nota3)/3
    return media.toFixed(1)
}

console.log("Ejercicio 4: "  + media3(10,5,6))

//ej5
function numerosCubo() {
    for (var i = 0; i <= 10000; i++) {
        var num = i.toString();
        var suma = 0;
        for (var j = 0; j < num.length; j++) {
            suma += multiplicacion3(parseInt(num[j]), parseInt(num[j]), parseInt(num[j]));
        }
        if (suma === i) {
            console.log(i);
        }
    }
}

console.log("Ejercicio 5: " +numerosCubo());