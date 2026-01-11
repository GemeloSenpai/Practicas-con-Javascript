
let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 19],
    ['Celulares', 120],
])

// estableciendo un nuevo objeto
mapa.set('Teclado', 20)

// podemos borrar 
mapa.delete('Tablets')

// podemos preguntar su tamaño
let pregunta = mapa.size

// Preguntamos si hay un o varios elementos que especifiquemos por parametro
let pregunta2 = mapa.has('Tablets')

// use console.log() para mostrar lo que desee
console.log(mapa)
