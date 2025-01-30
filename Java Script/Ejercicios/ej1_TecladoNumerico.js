const contenedor = document.getElementById("contenedor");

for(let i = 1; i <= 9; i++){

let botonTeclado = document.createElement('p'); //crear elemento
botonTeclado.innerHTML = i; //añado el número
botonTeclado.className = "botonNumero"; //le pongo la classe correspondiente
contenedor.appendChild(botonTeclado) //añado el boton al div

botonTeclado.addEventListener('click'), () => handleKeyClick(key);
}

