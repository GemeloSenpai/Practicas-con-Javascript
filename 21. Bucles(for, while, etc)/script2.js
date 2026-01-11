// ejemplo de bucles

// ejemplo para recorre un objeto

const alumno = {
    nombre: 'Ricardo',
    edad: 25,
    tecnologias: ['HTML', 'CSS', 'PHP']
}

// se puede remplazar key por clave y es lo mismo
for(const key in alumno){
    console.log(alumno[key])
}

// Ejemplo de for each
let numeros = [1,2,3,4,5,6,7,8,9]

// se pasa un callback o funcion flecha a la nueva var y se muestra con console
numeros.forEach(numero => {
    console.log(numero)
});