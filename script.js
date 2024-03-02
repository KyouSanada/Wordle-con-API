const API = "https://random-word-api.vercel.app/api?words=1&length=5"; 
fetch(API) .then((response) => {
response.json().then((body) => { 
palabra = body[0].toUpperCase(); }); }) 
.catch((error) => { console.log(error); });
const button = document.getElementById("guess-button");
const reintentar = document.getElementById("retry-button"); 
const guesses = document.getElementById("guesses");
const respuestaCorrecta = document.getElementById("respuesta");
let numIntentos = 6; 


button.addEventListener("click", () =>{
const grid = document.getElementById("grid");
const row = document.createElement("grid");
row.className = "row";
intento = leerIntento();
if(!intento || intento.length<5){
    guesses.innerHTML= 
        '<h3>A five-letter word is required<img src="error.png"></h3>';
    return}
        else{guesses.style.display="none";}
for ( i in palabra) {
    const span = document.createElement("row");
    span.className = "letter";
    span.innerText = intento[i];
    if(palabra[i]===intento[i]){
        span.style.background = "#26ee40";}
    else if(palabra.includes(intento[i])){
        span.style.background = "#eee01d"}
    else{span.style.background = "#757570"};
    row.appendChild(span);
}
grid.appendChild(row);
if(palabra===intento){
    guesses.style.display="block"
    guesses.innerHTML = '<h2 style="color:#1f991b">¡You Win!<img src="win.png"></h2>';
    button.style.display= "none";
    reintentar.style.display = "block";
    return
}; 
numIntentos--;
if(numIntentos===0){
    respuestaCorrecta.style.display="block";
    respuestaCorrecta.innerHTML= "Respuesta Correcta: " + palabra;
    guesses.style.display="block"
    guesses.innerHTML = '<h2 style="color:#6d1212">¡You Lose!<img src="lose.png"></h2>';
    button.style.display= "none";
    reintentar.style.display = "block";
}
document.getElementById("guess-input").value=""
});

function leerIntento(){
    const input = document.getElementById("guess-input");
    const valor = input.value.toUpperCase();
    return valor
};

reintentar.addEventListener("click", () =>{
    button.style.display= "none";
    reintentar.style.display = "none";
    guesses.innerHTML = '<h2>Charging next word...</h2>'
    setTimeout(function(){
        location.reload();}, 1000)});


