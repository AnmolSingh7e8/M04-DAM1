class Personaje {

    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar() { consol.log("Ha atacado " + this.nombre) }

    toString(){
        return this.nombre
    }
}
