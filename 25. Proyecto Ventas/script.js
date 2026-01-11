import { barcelona, roma, paris, londres } from "./ciudades.js";

// obtener los elementos del DOM (Document Object Model) Representacion grafica del HTML (organizacion por nodos)
// obteniendo elementos sin id de un html
let enlaces = document.querySelectorAll('a'); // investigar sobre selectores (Seleccionar etiqueta <a>)
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// agregar un evento click a cada enlace
// una funcion dentro de un for each
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function() {  // si hacemos click a uno de los enlaces
        // remover el activo, limpieza de los 4
        enlaces.forEach(function(enlace){   // hacemos un bucle para quitar el active y que ninguno este activo
            enlace.classList.remove('active');
        });
        // agregar la clase "active" al enlace actual
        this.classList.add('active') // le agregamos la clase active al que esta activo (el seleccionado)
        // es como agregar un class = "active" en el HTML de esa etiqueta, pero desde JS

        // obtener el contenido correspondiente segun el enlace
        // traer la informacion de los objetos correspondientes a la eleccion 
        let contenido = obtenerContenido(this.textContent) // enviamos a que le dimos click

        // mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    }); 
});

// funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){ // el enlace puede tener una ciudad 
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres,
    }; 
    return contenido[enlace]; // retorna el contenido seleccionado 
};