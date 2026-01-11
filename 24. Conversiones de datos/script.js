// string a number ( SI USAMOS UN OPERADOR ARITMETICO ANTES Y USAS TYPEOF PUEDES VER QUE LO CONVIERTE A NUMBER)
let a = Number('3.14') // el metodo Number vacio da como resultado a cero su valor predeterminado
console.log(a)
console.log(typeof a)

// metodo parseInt()
let b = parseInt('3.14')
console.log(b)
console.log(typeof b)

// metodo paseFloat()
let c = parseFloat('3.14')
console.log(c)
console.log(typeof c)

// Error comun ( da como resultado NaN que significa Not at Number)
let d = parseFloat('Marcos')
console.log(d)
console.log(typeof d)

// Number a String
let e = String(7)
console.log(e)
console.log(typeof e)

// otra forma 
let f = 1
let g = f.toString()
console.log(g)
console.log(typeof g)

// date a number
let h = new Date()
let i = Number(h)

console.log(i)
console.log(typeof i) // nos da milisegundos

// date a string
let j = new Date() // podemos usar toString() aqui
let k = String(j)

console.log(k)
console.log(typeof k) 

// number a boolean el 0 es false y 1 true 
// cero no pasa corriente y 1 si pasa corriente
let l = Boolean(0) // podemos usar toString() aqui
let m = Boolean(1)

console.log(l) // true, a partir de uno se consideran true todos los numeros 
console.log(typeof l) 

console.log(m) // false
console.log(typeof m) 

// importante cuando se pide un cero 
// let manuel = 7
let manuel = 0

if (manuel && manuel == 0){
    console.log('vino un dato')
}else{
    console.log('Es null o undefined')
}