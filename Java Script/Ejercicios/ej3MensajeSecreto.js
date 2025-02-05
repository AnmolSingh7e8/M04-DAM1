function textoSecreto(texto){
    let text = texto.toUpperCase();
    let resultado = "";
    for(let i = 0; i < text.length; i++){
        switch(text[i]){
            case "E":
                resultado += "3";
                break;
            case "S":
                resultado += "5";
                break;
            case "T":
                resultado += "7";
                break;
            case "A":
                resultado += "4";
                break;
            case "I":
                resultado += "1";
                break;
            case "O":
                resultado += "0";
                break;
            default:  
                resultado += text[i];
                break;
        }
    }
    return resultado;
}

var mensaje = textoSecreto("EstE meNSAjE SirVE para probar COMO NUESTRAS MentES PUedeN hACER cosAS MARAvilloSAS! coSAS ImPreSIONAntES! AL COMIENZO ERA UN pOCO DiFicIL pero ahora, EN esta LINEA tu mente esta LEyenDOLO auTOMAticamente sin SIQUIEra pensarlo.");

let id = document.getElementById("secreto");
id.textContent = mensaje;
