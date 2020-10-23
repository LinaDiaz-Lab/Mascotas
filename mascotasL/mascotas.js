console.log('mascotas.js')

let mascotas = []
const icons= {Perro: '🐶', Gato:'🐱', Conejo:'🐰', Hamster: '🐹', Pez: '🐠'}
const formulario = document.querySelector('#formulario')
const listaNombre = document.querySelector('#lista-nombre')
const listaEspecie = document.querySelector ('#lista-especie')
const listaEdad = document.querySelector ('#lista-edad')

//mascotas
const Cnombre = formulario.querySelector('#nombre')
const Cespecie = formulario.querySelector('#especie')
const Cedad = formulario.querySelector('#edad')



const registroMascotas = function (nombre, especie, edad) {
    mascotas.push ({nombre: nombre, especie:especie, edad:edad});
}

const listaDeNombre = function () {
    listaNombre.innerHTML = ''

    for (let i = 0; i < mascotas.length; i++) {
        const ms = mascotas[i];

    listaNombre.innerHTML += `<li>${ms.nombre}</li>`
    }
}

const listaDeEspecie = function () {
    listaEspecie.innerHTML = ''

    for (let i = 0; i < mascotas.length; i++) {
        const ms = mascotas[i];

    listaEspecie.innerHTML += `<li>${icons[ms.especie]}  ${[ms.especie]}</li>`
    }
}

const listaDeEdad = function () {
    listaEdad.innerHTML = ''

    for (let i = 0; i < mascotas.length; i++) {
        const ms = mascotas[i];

    listaEdad.innerHTML += `<li>${ms.edad}</li>`
    }
}
//-----------------------------------TABLA--------------------------------------
function lista() {
    return mascotas;
}

const remover=function(indice) {
    mascotas.splice(indice, 1)
    generarTabla()
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
        var boton = row.insertCell(3);

        nombreCell.innerHTML = list[i].nombre;
        especieCell.innerHTML = list[i].especie;
        edadCell.innerHTML = list[i].edad;
        boton.innerHTML = `<button class="btn btn-danger" onclick="remover(${i})">Eliminar</button>`

        tbody.appendChild(row);
    }
}

formulario.addEventListener('submit', function (event) {
event.preventDefault()
        

    console.log('el formulario esta funcionando')

    registroMascotas( Cnombre.value, Cespecie.value, Cedad.value)

    listaDeNombre()
    listaDeEspecie()
    listaDeEdad()

    generarTabla()
})





