
if (localStorage.getItem("nom") == null) {
    let nom = prompt("Com et dius?");
    let colorFons = prompt("Quin color vols de fons?");
    let colorLetra = prompt("De quin color vola la lletra?");
    localStorage.setItem("nom", nom);
    localStorage.setItem("colorFons", colorFons);
    localStorage.setItem("colorLetra", colorLetra);
    console.log("Dades guardades");
} else {
    document.body.style.backgroundColor = localStorage.getItem("colorFons");
    document.body.style.color = localStorage.getItem("colorLetra");
    let body = document.getElementsByTagName("body")[0];
    let h1 = document.createElement("h1");
    body.appendChild(h1);
    h1.textContent = localStorage.getItem("nom");
    let p = document.createElement("p");
    body.appendChild(p);
    p.textContent = "El color del teu fons es " + localStorage.getItem("colorFons") + " i el color de la lletra es " + localStorage.getItem("colorLetra");
    alert("Hola " + localStorage.getItem("nombre"));
    localStorage.clear();
}