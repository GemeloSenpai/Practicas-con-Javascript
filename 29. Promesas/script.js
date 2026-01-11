/* 
// Promesas en js, tipo de objetos que nos permiten manejar objetos asincronos y secuencias 
//sintaxis de una promesa, recibe dos parametros response y reject
let promesa = new Promise((response, reject) => {
    let resp = 'Esta es la respuesta del servicio'
    
    response(resp); // pasa la variable
    reject('Fallo');// pasa a error
});

// llamando la promesa
promesa.then(res => { // cuando responde positivamente utilizamos la respuesta (res)
    console.log(res); // mostramos en consola
}).catch(error => { // catch con funcion de flecha
    // console.error(error) // falla en rojo
    console.warn(error) // falla en amarillo
});
*/

//sintaxis de una promesa, recibe dos parametros response y reject  (otra forma) 200 (exito), 500 falla del backend o api
let promesa1 = new Promise((response, reject) => {
    //let resp = 'Esta es la respuesta del servicio'
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta info es importante' // se muestra cuando sale por el response
        }
        // response(resp); // pasa la variable
        reject('Fallo');// pasa a error
    }, 3000);
});

// llamando la promesa, como el fallo esta en el reject y es asincrono no puede salir por el catch, por lo
// cual sale por la promesa1
promesa1.then(res => { // cuando responde positivamente utilizamos la respuesta (res)
    console.log(res.description); // mostramos en consola
}).catch(error => { // catch con funcion de flecha
    // console.error(error) // falla en rojo
    console.warn(error) // falla en amarillo
});

