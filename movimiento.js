const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

const pantalla1 = document.getElementById("pantalla1");
const pantalla2 = document.getElementById("pantalla2");
const pantalla3 = document.getElementById("pantalla3");

const continuar = document.getElementById("continuar");

const mensajeEscape = document.getElementById("mensajeEscape");

let escapesSi = 0;

function mover(boton){


const x =
    Math.random() * (window.innerWidth - 150);

const y =
    Math.random() * (window.innerHeight - 150);

boton.style.position = "absolute";
boton.style.left = x + "px";
boton.style.top = y + "px";


}

btnSi.addEventListener("mouseover", () => {


if(escapesSi < 2){

    mover(btnSi);

    escapesSi++;

    if(escapesSi === 1){

        mensajeEscape.innerHTML =
        "😼 Casi...";
    }

    if(escapesSi === 2){

        mensajeEscape.innerHTML =
        "😼 Bueno, ya puedes darle clic.";
    }
}


});

btnNo.addEventListener("mouseover", () => {


mover(btnNo);


});

btnSi.addEventListener("click", () => {


if(escapesSi < 2) return;

pantalla1.classList.remove("activa");
pantalla2.classList.add("activa");


});

continuar.addEventListener("click", () => {


pantalla2.classList.remove("activa");
pantalla3.classList.add("activa");

setTimeout(() => {

    document
        .getElementById("mensajeFinal")
        .classList
        .remove("oculto");

    lanzarConfeti();

}, 1000);


});

function lanzarConfeti(){


const emojis =
["🎉","🎊","✨","🎂"];

for(let i=0;i<50;i++){

    const confeti =
    document.createElement("div");

    confeti.className =
    "confeti";

    confeti.innerHTML =
    emojis[
        Math.floor(
            Math.random()
            * emojis.length
        )
    ];

    confeti.style.left =
    Math.random()*100 + "vw";

    confeti.style.animationDelay =
    Math.random()*3 + "s";

    document.body.appendChild(confeti);
}


}
