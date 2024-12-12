let titulo = document.getElementById("titulo");
let adios = document.getElementById("adios");
let input = document.getElementById("user-input");
let importante = document.getElementsByClassName("importante");
console.log("Elemento con Id=titulo: " + titulo);
/*Cojemos el elemento del título */
console.log("Nombre del elemento con Id=titulo: " + titulo.nodeName);
/*Cojemos el contenido del <p> con Id=adios */
console.log("Nombre del elemento con Id=adios (textContent): " + adios.textContent);
/*Cojemos el contenido <span> con clase 'importante' (innerHTML) */
console.log("Nombre del elemento con clase importante (innerHTML): " + importante.innerHTML);
/*Cojemos el elemento con Id=adios (outerHTML) */
console.log("Nombre del elemento con Id=adios (outerHTML): " + adios.outerHTML);
/*Cojemos el value del input */
console.log("Elemento con Id=input: " + input.value);

// Modificamos el contenido del primer elemento con la clase 'importante'
for(let i = 0; i<importante.length; i++){
    importante[i].textContent = "Texto importante actualizado";
}

