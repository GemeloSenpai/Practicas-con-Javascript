// la secuencialidad, o varias promeasa, las tres respuestas resan mandadas afuer por el response
let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '1. Esta info es importante pero suele demorar mucho'
        }
        response(resp)
    }, 7000);
});

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '2. Esta info es importante demora poco'
        }
        response(resp)
    }, 3000);
});

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '3. Informacion rapida'
        }
        response(resp)
    }, 1500);
});

// A esto se le conoce la piramide de la perdicion y no se recomienda
promesa1.then(res => {  // promesa1 manda resp afuera
    console.log(res.description); // luego la escribe
    promesa2.then(res => { // promesa2 manda resp afuera
        console.log(res.description) // luego la escribe
        promesa3.then(res => { // promesa3 manda resp afuera
            console.log(res.description) // luego la escribe
        }).catch(error => {
            console.warn(error)
        })
    }).catch(error => {
        console.warn(error)
    })
}).catch(error => { 
    console.warn(error) 
});