let personajes = document.getElementById('personajes');
let object = document.getElementById('object');
let rooms = document.getElementById('rooms');
let description = document.getElementById('description');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let cont1 = document.querySelector('.container-1');
let cont2 = document.querySelector('.container-2');
let about2 = document.querySelector('.about2');
let home2 = document.querySelector('.home2');
let retorno = document.getElementById('retorno');
let prototipo = document.getElementById('prototype');
let salas = document.getElementById('salas');

personajes.addEventListener("click", () => {
    description.innerText = "CHARACTERS AND ENEMIES";
    document.getElementById('personas').style.display = "block";
    document.getElementById('salas').style.display = "none";
    document.getElementById('objetos').style.display = "none";
})

object.addEventListener("click", () => {
    description.innerText = "OBJECTS";
    document.getElementById('objetos').style.display = "block";
    document.getElementById('salas').style.display = "none";
    document.getElementById('personas').style.display = "none";
    document.getElementById('objetos').style.paddingTop = "10%";
})

rooms.addEventListener("click", () => {
    description.innerText = "ROOMS";
    document.getElementById('salas').style.display = "block";
    document.getElementById('personas').style.display = "none";
    document.getElementById('objetos').style.display = "none";
    document.getElementById('salas').style.paddingTop = "10%";
})

home.addEventListener("click", () => {
    about.style.color = "white";
    cont1.style.display = "block";
    cont2.style.display = "none";
})
about.addEventListener("click", () => {
    home.style.color = "white";
    about.style.color = "red";
    cont1.style.display = "none";
    cont2.style.display = "block";
    document.title = "About us";
})

if (about2.style.color = "red"){
    home2.style.color = "white";
    about2.style.textDecoration = "underline white";
}

function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('person');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

salas.addEventListener("click", () => {
    prototype.style.display = "block";
    retorno.style.display = "block";
})

retorno.addEventListener("click", () => {
    prototype.style.display = "none";
    retorno.style.display = "none";
})