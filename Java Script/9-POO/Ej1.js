class TarjetaCredito{
    #numTarjeta;
    #dataVenciment;
    #cvv;
    #pin;
    #activa;
    #saldo;
    constructor(nom, numTarjeta, dataVenciment, cvv, pin, activa, saldo) {
        this.nom = nom;                
        this.#numTarjeta = numTarjeta;
        this.#dataVenciment = dataVenciment;
        this.#cvv = cvv;
        this.#pin = pin;
        this.#activa = activa;
        this.#saldo = saldo
      }

    get activa(){return this.#activa}
    
    activar(){
        if(this.#activa == false){
            this.#activa = true
            console.log("Tarjeta activada correctamente")
        }
    }

    anular(){
        if(this.#activa == true){
            this.#activa = false
            console.log("Tarjeta desactivada correctamente")
        }
    }
    
    pagar(quantitatAPagar){
        if(this.#saldo > quantitatAPagar){
            this.pin = this.saldo - quantitatAPagar
            console.log("Pago realizado correctamente")
        } else {
            console.log("No hi han suficients diners")
        }
    }

    get pin(){return this.pin}

    cambiarPin(pinNuevo){ 
        this.pin = pinNuevo
        console.log("Pin cambiado correctamente")
    }
 }

let tarjeta1 = new TarjetaCredito("Denis", 123414123432142, "07/12", 902, true, 20000)
tarjeta1.activar
tarjeta1.pagar(50) 
let tarjeta2 = new TarjetaCredito("Anmol", 743859734953489, "09/06", 459, true, 40000)
let tarjeta3 = new TarjetaCredito("Denis", 774389758943759, "05/02", 327, true,   100000)
