const televisor = {
    nombre: "TV Samsung 42”",
    categoria:"Televisores",
    unidades: 4,
    precio: 345.95,
    getImporte: function (){
        return this.unidades * this.precio
    }
}

const televisorJSON = JSON.stringify(televisor);

console.log(televisorJSON);

const televisorObj = JSON.parse(televisorJSON);

console.log(televisorObj);