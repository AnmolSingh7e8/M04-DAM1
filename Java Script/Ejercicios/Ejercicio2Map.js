const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10],[10]]

// Crear el Map relacionando módulos con las notas

const notasPorModulo = new Map(modulos.map((modulo, index) => [modulo, alumnoNotas[index]]));

// Actualizar las notas de m07 a [7.5, 6]
notasPorModulo.set("m07", [7.5, 6]);

// Obtener un Set con las claves (nombres de los módulos)

const modulosSet = new Set(notasPorModulo.keys());

console.log(notasPorModulo);
console.log(modulosSet);