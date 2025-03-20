import {Personaje} from "./Personaje.js"   

class Guerreo extends Personaje {
    constructor(fuerza) {
        super(nombre, nivel, puntosDeVida)
        this.fuerza = fuerza;
    }
    

    atacar(){
        console.log("El guerrero " + Personaje.toString() + " ha atacado con su fuerza de " + this.fuerza + "." )
    }
}