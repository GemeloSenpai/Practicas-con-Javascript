
// Arrays o arreglos
const array = ['Curso HTML', 'Curso CSS', 'Curso JavaScript']

// inicializando un array vacio
const array1 = new Array (5)

// se agregan valores al arreglo
array1[0] = 'Curso de Angular'
array1[1] = 'Curso de React'
array1[2] = 'Curso de Git'
array1[3] = {nombre: 'Pedro'}
array1[4] = [1,2,3]

//console.log(array1)
//console.log(array1[2])
//console.log(array1.length)
//document.getElementById('select').innerHTML = array1

//metodo sort() para ordenar, esto ordenara los numero de menor a mayor
const array2 = [5,4,3,2,1]
//console.log(array2.sort())


//metodo sort() para ordenar, esto ordenara los numero de menor a mayor
const array3 = ['Zapato', 'Jaime', 'Braxil', 'Ana']
//console.log(array3[array3.length-1])

// repeticion de un array
const array4 = ['Despertarse', 'Comer', 'Estudiar', 'Dormir']

let texto = ''
for (let index = 0; index < array4.length; index++){
    texto += "<li>" + array[index] + '</li>'
}

document.getElementById('select2').innerHTML = texto


// otro ejemplo 
const array5 = ['HTML', 'CSS', 'JS']
// agregando indices al arreglo (otra manera)
array5[array5.length] = 'React'
array5[array5.length] = 'Angular'

// console.log(array5)
