// typeOf clasifica los tipos de datos y nos dice que tipo de datos es
// String 
let variable1= typeof 'Manuel'

// number
let variable2 = typeof 3.14

// number (cas0 especial)
let variable3 = NaN

// boolean
let variable4 = typeof true

// array (Nos devuelve un objeto) (Caso especial)
let variable5 = typeof ['Manuel', 'Lopez']

// objeto
let variable6 = typeof {curso: 'Javascript'}

// objeto caso especial (Devuelve un objeto)
let variable7 = typeof new Date()
let variable8 = typeof new Set()
let variable9 = typeof new Map()

// funcion
let variable10 = typeof function(){}

// undefined (por error)
let variable11 = typeof manuelLopez // no existe por lo cual muestra undefined

// objeto caso especial de null
let variable12 = typeof null

// Probar todas las variables
//console.log(Variable1)

// saber que un dato que viene de backend es string
/*
let datoQueVieneBackend = 'Dato'
// let datoQueVieneBackend = 125 
if(typeof datoQueVieneBackend === 'string'){
    console.log('El dato es String')
}else{
    console.log('Reclamar a compañero que mande un String')
}
*/

// como distingir entre varios objetos

let variable13 = [1,2,3,4,5]
let variable14 = new Date()
let variable15 = new Set()
let variable16 = new Map()
let variable17 = null

console.log(variable13 instanceof Array)
// probamos con la siguiente variable y vemos que nos da false porque no lo es lo cual no lleva a crear un if
console.log(variable13 instanceof Array)

// probar a cambiar la variable13 por la variable 14
if(variable13 instanceof Array){
    console.log('Gracias backend por mandarme un Array')
}else{
    console.log('Mandame un Array por favor')
}

//podemos realizar el ejemplo anterior con todos los metodos menos con el metodo null 
// porque rompe el codigo
// null no tiene una instancia y no es un valor