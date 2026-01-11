// se escriben asi /patter/modificadores 

// busca en donde conincide los caracteres js en el String (se puede omitir el key sensitive con una i despues de la /)
let texto = 'Este es un curso de js'
let busqueda = texto.search(/js/i)
console.log(busqueda)

// modificadores
// i: ignorar mayusculas y minusculas
// g: buscar en todo el texto pasado
// m: busqueda multilinea
// s: que permite usar

// se puede buscar al reves ( si buscamos numeros en un rango usamos [0-9], si no \d para digitos )
let pattern = /js/i
let resultado = pattern.test(texto)
let resultado2 = pattern.exec(texto)
console.log(resultado)
console.log(resultado2) // el metodo exec nos trae varios resultados

// patron de correo electronico, se usa para validar si las cadenas de texto estan correctas
let pattern2 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

console.log(pattern2.test('manuelcode@gmail.com'))