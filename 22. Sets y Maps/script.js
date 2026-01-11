
// crea un set con 3 entradas, es parecido a un array la diferencia es que no se puede repetir
let conjunto = new Set(['Pedro', 'Ricardo', 'Maria', 'Pedro', 'Ricardo', 'Ricardo'])

conjunto.add('Luciana') // agregar un elemento 
conjunto.delete('Pedro') // elimina el o los elementos mismos
let pregunta = conjunto.has('Pedro') // preguntamos si tiene el objeto devolvera un valor booleano

let pregunta1 = conjunto.size
console.log(conjunto)

// otro ejemplo donde no se debe de repetir los elementos, en este caso se repite cama
let array = ['Cama', 'Armario', 'Escritorio', 'Cama', 'Estante', 'Mesita de Luz']


function comprar(muebles){
    console.log(muebles)
}
// comprar(array)


function comprarSoloUnaUnidad(muebles){
    let unicaUnidad = new Set(muebles)
    console.log(unicaUnidad)
}
comprarSoloUnaUnidad(array) // em metodo set omitira los repetidos



// array duplicado ejemplo de uso de Set
let array2 = [1,1,2,2,3,3,4,4,4,]

// metodo set para quitar duplicados
let unico = new Set(array2)

// metodo para guardar ese Set como un array puro y utilizarlo como array 
let nuevoArray = [...unico]

// mostrar resultados
console.log(nuevoArray)