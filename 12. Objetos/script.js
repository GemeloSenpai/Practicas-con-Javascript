
const auto1 = {
    marca: 'Fiat',
    modelo: 'RX 780',
    peso: 550,
    color: 'Azul'
}

let auto2 = {
    marca: 'Renautl',
    modelo: 'VR400',
    peso: 750,
    color: 'Rojo'
}

/*
console.log('Auto 1: ', auto1)
console.log('Auto 2: ', auto2)
*/ 

// Acceder a un objeto especifico
console.log('El color del auto1 es: ', auto1.color)

// Tambien podemos cambiar los valores aunque sean const
auto1.marca = 'Toyota'

console.log(auto1)

// Tambien podemos acceder a los datos de la siguiente manera
console.log(auto1["marca"])