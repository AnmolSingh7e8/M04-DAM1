const televisor = {
    nombre: "TV Samsung 42”",
    categoria:"Televisores",
    unidades: 4,
    precio: 345.95,
    getImporte: function (){
        return this.unidades * this.precio
    }
}

console.log(televisor);

console.log("El precio es: " + televisor.getImporte());

let propiedades = Object.keys(televisor).filter(propiedad => typeof televisor[propiedad] != "function").concat("peso", "color", "reseñas");
console.log(propiedades)

for(propiedad in propiedades){
let input = prompt(`Introduce la propiedad ${propiedades[propiedad]}`);
if(input.length == 0 ) televisor[propiedades[propiedad]] = "Valor no introducido"
}

let element = document.getElementById("contenedor");
for(let propiedad in televisor){
    if(typeof televisor[propiedad] != "function") element.innerHTML += `<p>${propiedad}: ${televisor[propiedad]}</p>`;
    else {element.innerHTML += `<p>${propiedad}: ${televisor[propiedad]()}</p>`;
    }
}

/*
let precio = document.getElementById("precio");
let parafo = document.createElement("p");
parafo.textContent = televisor.getImporte();
precio.appendChild(parafo);
*/