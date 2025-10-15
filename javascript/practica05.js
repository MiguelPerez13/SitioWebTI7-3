const id = document.getElementById('idInput');
const nombre = document.getElementById('nombreInput');
const escuela = document.getElementById('escuelaInput');
const tabla = document.getElementById('tabla');
const tablaBody = document.getElementById('tableBody');
const btnAgregar = document.getElementById('btnAgregar');


function agregarFila(){
    let txtId = id.value.trim();
    let txtNombre = nombre.value.trim();
    let txtEscuela = escuela.value.trim();

    //validacion
    if(!txtId || !txtNombre || !txtEscuela){
        alert("por favor rellene todos los campos");
        return;
    }

    //crear una nueva fila
    const fila = document.createElement('tr');

    //crear y agregar celdas
    const celdaId = document.createElement('td');
    celdaId.textContent = txtId;
    fila.appendChild(celdaId);

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = txtNombre;
    fila.appendChild(celdaNombre);

    const celdaEscuela = document.createElement('td');
    celdaEscuela.textContent = txtEscuela;
    fila.appendChild(celdaEscuela);

    tablaBody.appendChild(fila);
    tabla.appendChild(tablaBody);

}

btnAgregar.addEventListener('click',agregarFila);