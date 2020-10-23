console.log('Lista de Mascotas.js')

// Inicializamos nuestras variables

const formulario = document.querySelector('#formulario')
const listaDeMascotas = document.querySelector('#lista-de-mascotas > tbody')
const iconosEspecies = { perro: '🐶', gato: '😼', serpiente: '🐍' }
let mascotas = []

// Cargo los campos dentro del formulario
const campoNombre = formulario.querySelector('#nombre')
const campoEspecie = formulario.querySelector('#especie')
const campoEdad = formulario.querySelector('#edad')

// Declaramos nuestras funciones

const registrarMascota = function (nombre, especie, edad) {
  mascotas.push({ nombre: nombre, especie: especie, edad: edad })
}

const removerMascota = function (indiceDelaMascota) {
  mascotas.splice(indiceDelaMascota, 1)
  listarMascotas()
}

const listarMascotas = function () {
  listaDeMascotas.innerHTML = ''

  for (let i = 0; i < mascotas.length; i++) {
    // Guardamos la mascota actual en una variable
    const ms = mascotas[i]

    listaDeMascotas.innerHTML = listaDeMascotas.innerHTML + `<tr>
      <td>${ms.nombre}</td>
      <td>${iconosEspecies[ms.especie]}</td>
      <td>${ms.edad}</td>
      <td><button class="btn btn-danger" onclick="removerMascota(${i})">Remover</button></td>
    </tr>`
  }
}

// Declaramos los eventos

formulario.addEventListener('submit', function (event) {
  event.preventDefault()

  registrarMascota( campoNombre.value, campoEspecie.value, campoEdad.value )

  listarMascotas()
})