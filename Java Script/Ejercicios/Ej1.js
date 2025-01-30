let titulo = document.getElementById("titulo");
let adios = document.getElementById("adios");
let input = document.getElementById("user-input");

//value: poner el texto de un input
//HOLAAA
//(o lo que pongas en value en la etiqueta del input)
console.log("Elemento con Id=input: " + input.value);

console.log("Elemento con Id=titulo: " + titulo);

//nodeName: el nombre de la etiqueta
//h1
console.log("Nombre del elemento con Id=titulo: " + titulo.nodeName);
//textContent: Unícamente el texto (sin tags)
//Adiós mundo cruel
console.log("Nombre del elemento con Id=adios(textContent): " + adios.textContent);

//Inner: Muestra lo de dentro de la línia incluyendo tags interiores
//Adiós mundo <em>cruel</em>
console.log("Nombre del elemento con Id=adios(innerHTML): " + adios.innerHTML);

//Outer: Muestra todo lo de la línea
//<p class="importante" id="adios">Adiós mundo <em>cruel</em></p>
console.log("Nombre del elemento con Id=titulo: " + titulo.outerHTML);