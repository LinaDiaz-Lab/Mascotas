let mascotas = []
const Cnombre = formulario.querySelector('#nombre');
const Cespecie = formulario.querySelector('#especie');
const Cedad = formulario.querySelector('#edad');


const registroMascotas = function (nombre, especie, edad) {
    mascotas.push ({nombre: nombre, especie:especie, edad:edad})
}

function lista() {
    return mascotas;
}

function generarTabla() {
    var list = lista()
    tbody = document.querySelector('#table tbody')


    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        var nombreCell= row.insertCell(0);
        var especieCell= row.insertCell(1);
        var edadCell= row.insertCell(2);


        nombreCell.innerHTML = list[i].nombre;
        especieCell.innerHTML = list[i].especie;
        edadCell.innerHTML = list[i].edad;

        tbody.appendChild(row);
    }
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    registroMascotas(Cnombre.value,Cespecie.value,Cedad.value);
    generarTabla()
})

function removeAnimal() {
 
}
