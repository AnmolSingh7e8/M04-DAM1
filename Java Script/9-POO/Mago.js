import {Personaje} from "./Personaje.js"

class Mago extends Personaje {
    constructor(mana) {
        super(nombre, nivel, puntosDeVida)
        this.mana = mana;
    }

    atacat(){
        console.log("El mago " + Personaje.toString() + " ha atacado " + " con su mana de " + this.mana + ".")
    
    }
}