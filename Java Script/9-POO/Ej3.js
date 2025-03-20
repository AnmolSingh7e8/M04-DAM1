import {Personaje} from "./Personaje.js"
import {Guerrero} from "./Guerrero.js"
import {Mago} from "./Mago.js"

let guerrero1 = Guerrero(50)
let personaje1 = Personaje("Juan", 5, 200, guerrero1)
console.log(personaje1)