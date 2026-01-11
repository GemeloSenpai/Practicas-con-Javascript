// Metodo Slice
// solo muestra los caracteres desde el 4 al 7
//const texto = 'Educacion'
// const resultado = texto.slice(4,7)

// Metodos tachados son considerados deprecados 
// let resultado2 = texto.substr(4,7)

// Metodo replace
const texto = 'La educacion es muy importante en Honduras'
const resultado = texto.replace('Honduras', 'El Mundo')
//console.log(resultado)

// Pasar todo a mayusculas y minuscula
const resultado3 = texto.toUpperCase()
const resultado4 = texto.toLowerCase()
// console.log(resultado4)

// concatenacion de cadenas
const texto2 = 'La educacion es muy importante en '
const texto3 = 'Honduras'
const texto4 = 'El mundo'
const resultado5 = texto2 + texto3 
const resultado6 = texto2.concat(texto4)
// console.log(resultado6)


// Uso de metodo trim() que saca el espacio de adelante y de atras tambien puede usar trimEnd() y trimStar()
const texto5 = '           La educacion es muy importante en              '
const texto6 =' Honduras'
const texto7 =' el mundo'

const resultado7 = texto5.trim().concat(texto6)
//console.log(resultado7)


// Uso del metodo charAt(), muestra la posicion de la letra
const texto8 = 'La educacion es muy importante en '
const resultado8 = texto8.charAt(3)
//console.log(resultado8)


// Importante se puede dividir el teto usando el punto como separador 
const texto9 ='Este texto te lo manda el backend. Este texto es importante. Dividi el texto'

const resultado9 = texto9.split('.')
// mostrara un array e 3 elementos string
console.log(resultado9)