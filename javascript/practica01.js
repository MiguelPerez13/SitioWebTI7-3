/* obtener los objetos */

    const parrafo = document.getElementById('parrafo');
    const btnMay = document.getElementById('btnMay');
    const btnMin = document.getElementById('btnMin');
    const btnAgregar = document.getElementById('btnAgregar');
    const btnJustificar = document.querySelector('#justificarBtn');

    var col = parrafo.style.color;
    var tm = parrafo.style.fontStyle;
    var cf = parrafo.style.backgroundColor;

    function cambiar(){
        parrafo.style.color ='cyan';
        parrafo.style.fontSize = '20px';
        parrafo.style.backgroundColor = 'gray';

    }
    function normal(){
        parrafo.style.color = col;
        parrafo.style.font = tm;
        parrafo.style.backgroundColor = cf;

    }
    function mayuscula(){
        parrafo.textContent = parrafo.textContent.toUpperCase();
    }
    function minuscula(){
        parrafo.textContent = parrafo.textContent.toLowerCase();
    }
    function agregarTexto(){
        let txt = txtTexto.value;
        parrafo.innerText = parrafo.innerText + txt;
    }

    function justificar(){
        parrafo.style.textAlign = 'justify';
        parrafo.style.margin = '10em';
    }

    //codificar los eventos del parrafo
    parrafo.addEventListener('mouseover',cambiar);
    parrafo.addEventListener('mouseout',normal);
    btnMay.addEventListener('click',mayuscula);
    btnMin.addEventListener('click',minuscula);
    btnAgregar.addEventListener('click',agregarTexto);
    btnJustificar.addEventListener('click',justificar);


    