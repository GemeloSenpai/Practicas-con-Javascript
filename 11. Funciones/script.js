// Que es una funcion? es un bloque de codigo reutilizable y se puede llamar de cualquier lado su uso hace eficiente el codigo

/*
function suma(x, y){

    return x + y;

}

let respuesta = suma(5, 10)

console.log(respuesta)
*/

// otro ejemplo
const a = 5
const b = 6

const respuesta = suma(a,b)

function suma(x, y){
    return x + y;
}

// mostrar en consola usando expresiones de JS
console.log(`La respuesta de la suma de ${a} + ${b} es igual a: `, respuesta)