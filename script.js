const contador = document.getElementById("numero");
const sumar = document.getElementById("suma");
const restar = document.getElementById("resta");
const vuelta = document.getElementById("vuelta");

let numero = 0;

sumar.addEventListener("click",()=>{
    if(numero>=0){
        numero++;
    }
    contador.innerHTML = numero;
});

restar.addEventListener("click",()=>{
    if(numero>0){
        numero--;
    }
    contador.innerHTML = numero;
});

vuelta.addEventListener("click",()=>{
    if(numero>0){
        numero = 0;
    }
    contador.innerHTML = numero;
});