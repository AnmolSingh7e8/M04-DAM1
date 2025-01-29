//Ejercicio 1
function sumaPares(array){
    let suma = 0
    for(let x in array){
        if(array[x]%2 == 0){
            suma += array[x]
        }
    }
    return suma
}

console.log(sumaPares([2,4,5,6,7,8,3,1,10,4]))

//Ejercicio 2
function ordenarAlumno(array){
    var nombre = array.pop();
    var arreglo = array.unshift(nombre);
    var media = 0
    var suma = 0

    for(let i in array){
    
        if(Number(array[i]) > 2) {
            suma += Number(array[i]);
        }
    }

    media = suma/4
    array.push(media)
    var frase = array.join(", ")
    return frase
}

console.log(ordenarAlumno(["Rodriguez", "8", 9, '5',4, 'Clara']))


//Ejercicio 3
function filterWords(array){
    let newArray = [];
    for(let x of array){
        let mayus = x.toUpperCase()
        if(mayus[0] != 'Z'){
            newArray .push(x)
        }
    }
    return newArray
}

console.log(filterWords(["Bob", "Alex", "Zoello"]))