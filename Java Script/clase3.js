/* */
function obraModal(missatge){
    const modal = document.getElementById("modal");
    const modalMessage =  document.getElementById("modal-message");
    modalMessage.textContent = missatge;
    modal.style.display = "flex";
}

/* Acceder a elemento 'close-modal' y escuchar al haver click*/
document.getElementById ("close-modal").addEventListener('click',function(){
    const modal = document.getElementById("modal")
    modal.style.display='none'
})

/*Evento ventana */
window.addEventListener('load', function(){
    /* Vamos a abrir la ventana modal */
    obraModal("Hello world");
    /*Paso 2*/
    this.document.getElementById("close-modal").addEventListener('click', function(){
        const nomUsuari = prompt("Com et dius?");
        console.log(nomUsuari);
        if(nomUsuari){
            obraModal(`Hola, ${nomUsuari}!`)
        }
    })
})
