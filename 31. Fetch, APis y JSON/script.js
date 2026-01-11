// api falsa de prueba json(js object noteichon)
// nos devuelve los 100 posteos podemos visualizar en la consola
// probar con 
///posts
// comments
// users
// comments?postId=1
// posts/1
// podemos ver el json en json beauty

/* forma cruda de usar fetch
fetch('https://jsonplaceholder.typicode.com/comments?postId=1') // pone un url, te devuleve una promesa
      .then(response => response.json()) // y la promesa al pasar por el json
      .then(json => console.log(json)) // nos permite tomar o mostar la info
fin del ejemplo */

// uso mejor de fetch
let urlBase = 'https://jsonplaceholder.typicode.com' // envio de url de forma dinamica y query
let query = 'comments?postId=1'

/*
// GET: pedir informacion o obtener informacion
fetch(`${urlBase}/${query}`).then(response => response.json()).then(json => console.log(json))
fin de ejemplo get*/


/*
// POST: enviar informacion
// mal escritura dentro del objeto puede provocar errores 404 y 400, envio mal del pedido
let requestBody = {
    title: 'Manuel Comenta sobre tu foto',
    body: 'Que bella foto prima',
    userId: 1,}

fetch(`${urlBase}/posts`, { // paso de dato al crudo
    method: 'POST', // indica el metodo (por defecto viene get)
    // se pueden poner cors o credenciales medidas de seguridad, no se puso nada y se paso a headres
    headers: { // 
        'Content-type': 'aplication/json; charset=UTF-8'// mandamos un JSON, charset acepta la ñ
    },
    body: JSON.stringify(requestBody) // tiene que ser un JSON como un string como requisito
}).then(response => response.json()).then(json => console.log(json))
fin de ejemplo post*/


/*
// PUT: editar informacion (modificar)
// envio de informacion al fetch con metodo put
let posteo = 5 // editar posteo 5
let requestBody2 = {
    id: 3, // id de cual vamos a modificar (comentario)
    title: 'Manuel Comenta sobre tu foto',
    body: 'Que bella foto prima',
    userId: 5,}

fetch(`${urlBase}/posts/${posteo}`, { // paso de dato al crudo
    method: 'PUT', // indica el metodo (por defecto viene get)
    // se pueden poner cors o credenciales medidas de seguridad, no se puso nada y se paso a headres
    headers: { // 
        'Content-type': 'aplication/json; charset=UTF-8'// mandamos un JSON, charset acepta la ñ
    },
    body: JSON.stringify(requestBody2) // tiene que ser un JSON como un string como requisito
}).then(response => response.json()).then(json => console.log(json))
fin de ejemplo put */


/* inicio de ejemplo patch
// PATCH: editar informacion (solo edita un atributo)
let post= 10 // editar posteo 5

let modificacion = {
    title: 'Este titulo ha sido modificado',
    }

fetch(`${urlBase}/posts/${post}`, { // paso de un dato al crudo
    method: 'PATCH', // indica el metodo (por defecto viene get)

    // se pueden poner cors o credenciales medidas de seguridad, no se puso nada y se paso a headres
   headers: { // 
       'Content-type': 'aplication/json; charset=UTF-8'// mandamos un JSON, charset acepta la ñ
    },
    body: JSON.stringify(modificacion) // tiene que ser un JSON como un string como requisito
}).then(response => response.json()).then(json => console.log(json))   
fin de ejemplo patch */

// DELETE: borar un item
let elementoAEliminar = 7
fetch(`${urlBase}/posts/${elementoAEliminar}`, {
    method: 'DELETE'
});