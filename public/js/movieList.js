const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element)
const $ = (element) => document.getElementById(element)

const body = qs('body')
const h1 = qs('.moviesListTitulo')

let oscuro = prompt('¿Desea modo oscuro?')

if (oscuro) {
    body.style.background = "#7f7f7f"
    qs('body').classList.add('fondoMoviesList')
}

h1.innerHTML += "LISTADO DE PELÍCULAS"
h1.style.color = 'white'
h1.style.background = 'teal'
h1.style.fontSize = '20px'
