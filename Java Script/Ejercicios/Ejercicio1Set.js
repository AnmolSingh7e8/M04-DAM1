const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];

function eliminarDuplicados(numeros){
    let nuevoArray = new Set(numeros);
    console.log ([...nuevoArray]);
}

eliminarDuplicados(numeros);


const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function tienenElementosEnComun(array1, array2){
    let set1 = new Set(array1);
    let set2 = new Set(array2);
    let esta = false

    for(num of set1){
        if(set2.has(num)){
            esta = true
        }
    }
    return esta
}

console.log(tienenElementosEnComun(array1, array2));

