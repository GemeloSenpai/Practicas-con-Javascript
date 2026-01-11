// crear una funcion que convierta grados fahrenheit a celcius
// se puede usar el metodo parseInt() en los parametros de la funcion y convertir un string a int
const temperatura = 76

function transformarACelcius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

const respuesta = transformarACelcius(temperatura);

// mostrar en consola usando expresiones de JS
console.log(`La temperatura en grados celcius es de: `, parseInt(respuesta));