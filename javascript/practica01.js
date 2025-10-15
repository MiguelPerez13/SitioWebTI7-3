
const valor = document.getElementById("valor");
const btnIncrementar = document.getElementById("incrementar");
const btnDisminuir = document.getElementById("disminuir");
const btnReiniciar = document.getElementById("reiniciar");
let contador = 0;

function incrementar(){
    contador++;
    valor.textContent = contador;
}


function disminuir(){
    contador--;
    valor.textContent = contador;
}

function reiniciar(){
    contador = 0;
    valor.textContent = contador;
}

btnIncrementar.addEventListener('click',incrementar);
btnDisminuir.addEventListener('click',disminuir);
btnReiniciar.addEventListener('click',reiniciar);