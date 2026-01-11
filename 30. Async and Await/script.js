// la secuencialidad, o varias promeasa, las tres respuestas resan mandadas afuer por el response
let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '1. Esta info es importante pero suele demorar mucho'
        }
        response(resp)
    }, 7000); // 7 segundos para que se cumpla
});

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '2. Esta info es importante demora poco'
        }
        response(resp)
    }, 3000); // 3 segundos para que se cumpla
});

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '3. Informacion rapida'
        }
        response(resp)
    }, 1500); // 1.5 segundos para que se cumpla
});


// uso de async, forma de trabajar promesas, asyn hace que una funcion sepa que es asincronica y la otra await
// es para esperar que las promesas se cumplan
// solucion de la piramide de la muerte
async function ejecutarPromesas(){
    let respuestaPromesa1 = await promesa1 // si es exitoso guardara el response
    console.log(respuestaPromesa1)
    let respuestaPromesa2 = await promesa2 // si es exitoso guardara el response
    console.log(respuestaPromesa2)
    let respuestaPromesa3 = await promesa3 // si es exitoso guardara el response
    console.log(respuestaPromesa3)
}

// ejecutar la accion
ejecutarPromesas()