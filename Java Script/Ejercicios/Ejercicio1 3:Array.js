const notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]
let media = 0

for(nota of notas){
    media += nota
}

let calculMedia = media/7
console.log(calculMedia)

console.log(notas.find(nota => nota >= 5.0))

console.log(notas.map(nota => nota = nota * 2))