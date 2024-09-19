let listaNombresGastos = [];
let listaDescripcionGastos = [];
let listaValoresGastos = [];


function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = parseFloat(document.getElementById('valorGasto').value);


    listaNombresGastos.push(nombreGasto);
    listaDescripcionGastos.push(descripcionGasto);
    listaValoresGastos.push(valorGasto);
    
    console.log(listaNombresGastos);
    console.log(listaDescripcionGastos);
    console.log(listaValoresGastos);
    alert("¡Gasto agregado!");
    actualizarListaGastos();

    if (valorGasto > 150) {
        alert("Atención con este gasto. Es sobre 150 USD. Cuidado con el bolsillo.")
    }
}


function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((nombreGasto, posicion) => {
        const valorGasto =  Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionGastos[posicion];
        htmlLista += `<li>Gasto: ${nombreGasto} - Descripción: ${descripcionGasto} - USD ${valorGasto.toFixed(2)} 
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        </li>`;
        totalGastos += valorGasto;

    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
    }

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('valorGasto').value = '';
    
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();

}

function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];

    document.getElementById('gastoPosicion').value = posicion;

    document.getElementById('botonGuardar').style.display = 'block';
    document.getElementById('botonAgregar').style.display = 'none';

    
     
}

function guardarCambio() {
    let posicion = document.getElementById('gastoPosicion').value;
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = parseFloat(document.getElementById('valorGasto').value);

    listaNombresGastos[posicion] = nombreGasto;
    listaDescripcionGastos[posicion] = descripcionGasto;
    listaValoresGastos[posicion] = valorGasto;

    actualizarListaGastos();
    limpiar();

    document.getElementById('botonGuardar').style.display = 'none';
    document.getElementById('botonAgregar').style.display = 'block';
}