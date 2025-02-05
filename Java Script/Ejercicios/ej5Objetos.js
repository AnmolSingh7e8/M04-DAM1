//crear el array de los objetos nombre, edad y email
var persona1 = {nombre: "Juan", edad: 25, email: "juan@gmail.com", "saludar": function(){return "Hola, soy "+  this.nombre}};
var persona2 = {nombre: "Ana", edad: 30, email: "ana@gmail.com","saludar": function(){return "Hola, soy "+  this.nombre}};
var persona3 = {nombre: "Pedro", edad: 45, email: "pedro@gmail.com", "saludar": function(){return "Hola, soy "+  this.nombre}};

var personas = [persona1, persona2, persona3];

personas.push({nombre: "Paco", edad: 25, email: "paco@gmail.com","saludar": function(){return "Hola, soy "+  this.nombre}});

function mostrarUsuario(array){
    for(i in array){
        console.log(("Nombre: " + array[i].nombre) + "," + (" Edad: " + array[i].edad) + "," + (" Email: " + array[i].email));
    }
}

mostrarUsuario(personas);

console.log(persona1.saludar());
console.log(persona2.saludar());
console.log(persona3.saludar());
console.log(personas[3 ].saludar());