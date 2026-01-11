Math.E               // Numero de Euler
Math.PI              // Numero Pi
Math.SQRT2           // Devuelve la raiz cuadrada de 2
Math.SQRT1_2         // devuelve la raiz cuadrada de 1/2
Math.LN2             // devuelve el logaritmo natural de 2
Math.LN10            // devuelve el logaritmo natural de 10
Math.LOG2E           // devuelve el logaritmo de E en base a 2
Math.LOG10E          // devuelve el logaritmo de E en base a 10

const numero = 2.5
// redondea el numero
const redondeado = Math.round(numero)

// redondea el numero no importa si no cumple las reglas lo redondea al siguiente numero
const redondeado2 = Math.ceil(numero)

// redondea el numero no importa si no cumple las reglas lo redondea al anterior numero
const redondeado3 = Math.floor(numero)

// trunca en los enteros 
const redondeado4 = Math.trunc(numero)

// probar los demas 
console.log(redondeado)

// metodo random

console.log(Math.random())

let numero2 = Math.random()*100

let redondeo = Math.round(numero2)
console.log(redondeo)