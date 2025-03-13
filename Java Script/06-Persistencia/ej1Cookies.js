if (!document.cookie) {
    let nom = prompt("Com et dius?");
    document.cookie = "nombre=" + nom;
    document.cookie = ';expires=Thu, 20 March 2025 00:00:01 GMT';
    console.log("Nom guardat")
} else{
    let nombre = document.cookie.split("=")[1];
    alert("Hola " + nombre);

}