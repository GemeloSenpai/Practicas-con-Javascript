// otros metodos de para arreglos

let array = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']

// algunos metodos mas usados en los arrays

// metodo filter que compara el valor de x y lo iguala a manzana y si encuentra varios los muestra en un arreglo 
const resultado = array.filter(x => x == 'Manzana')
// console.log(resultado)

// Otro ejemplo
const array1 = [                                   // Indices del array
    { nombre: 'Pedro', apellido: 'Gonzales' },       // 0
    { nombre: 'Maria', apellido: 'Gonzales' },       // 1
    { nombre: 'Lucia', apellido: 'Gonzales' },       // 2
    { nombre: 'Ricardo', apellido: 'perez' },        // 3
    { nombre: 'Glotis', apellido: 'Juarez' },        // 4
    { nombre: 'Fernanda', apellido: 'Fernandez' }    // 5
]
                                // callback o funacion de flecha
const resultado1 = array1.filter(x => x.apellido == 'Gonzales')

for (let index = 0; index < resultado1.length; index++){
    const element = resultado1[index];
    //console.log(element.nombre);
}


// uso de metodo map() en un array
let array2 = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']
                  
// funcion de flecha con un if()
const resultado2 = array.map(x => {if(x == "Manzana") return 'Naranja'})
//console.log(resultado2)


// uso de metodo fill()
let array3 = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Pera', 'Pera']
                  
// funcion de flecha con un if(), se pone el indice del arreglo que no se remplazara los demas si se reemplazaran
const resultado3 = array3.fill('Naranja', 1)
//console.log(resultado3)

// uso de find() en un arreglo te devuelve ese objeto, te devuelve el primer resultado que concuerda con la busqueda
const resultado4 = array3.find(x => x == 'Pera')
//console.log(resultado4)

// uso de finIndex() devuelve el indice que con cuerda con la busqueda y solo devuelve el primero
const resultado5 = array3.findIndex(x => x == 'Pera')
//console.log(resultado5)

// uso de some() devuelve un valor booleano
const resultado6 = array3.some(x => x == 'Pera')
//console.log(resultado6)

// uso de every() es como preguntar: son todos pera? y analizara el array y devolvera un valor Booleano
const resultado7 = array3.every(x => x == 'Pera')
//console.log(resultado7)

// uso de pop() nos devuelve el ultimo resultado del array pero lo arranca de el y muestra como quedo el array
const resultado8 = array3.pop()
//console.log(resultado8)
//console.log(array3)

// uso de shift() arranca el primer valor y lo muesta, tambien muestra el array como quedo
const resultado9 = array3.shift()
//console.log(resultado9)
//console.log(array3)

// uso de push(), agrega un elemento al final del array
const resultado10 = array3.push('Ciruela')
//console.log(resultado10)
//console.log(array3)

// uso de unshift(), agrega un elemento al inicio del array
const resultado11 = array3.unshift('Piña')
//console.log(resultado11)
//console.log(array3)

// uso de splice sirve para cortar el array
// indices        0          1         2        3        4         5
const array4 = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi']

// los parametros son: (indice, Cuantos quiero cortar, y que agrego)
// corta el limon y pone Ciruela
// Jugar con valores y puede recibor mas parametros
const resultado12 = array4.splice(2,1,'Ciruela')
//console.log(array4)

// metodo slice() devuelve lo cotado
const resultado13 = array4.slice(2,4)
//console.log(resultado13)


// uso de join() en array para separar los datos y mostrarlos bien ejecutar en HTML
// document.getElementById('select3').innerHTML = array4.join(', ') 

// podemos concatenar arrays
const array5 = ['lechuga', 'Papas', 'Cebolla', 'Gengibre']
//console.log(array4.concat(array5))

// usando sort() para ordenar bien
const array6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// como se usa normalmente
console.log(array6.sort())
// como se usa para ordenar bien 
console.log(array6.sort((x,y) => x-y))

//odenando objetos
const array7 = [
    {auto: 'Fiat', año: 2020},
    {auto: 'Ferrari', año: 2021},
    {auto: 'Ford', año: 2000},
    {auto: 'BMW', año: 2023},
]

console.log(array7.sort((x,y) => x.año-y.año))

// se recomienda usar let para definir arreglos ya que con const no se pueden redefinir