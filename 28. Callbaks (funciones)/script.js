// Callbacks que se pasa a otra funcion para poder utilzar la de el

function mostrarConsola(num){
    console.log(num)
}

function calcular(num1, num2, callback){
    let suma = num1 + num2;
    callback(suma);
}

// llamando al callback y colocando los parametros
calcular(1, 2, mostrarConsola)