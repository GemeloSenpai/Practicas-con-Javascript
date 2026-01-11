
// funcion para agregar a la pantalla 
function agregar(valor){
    // esto agrega a la pantalla el valor del boton de la calculadora que pulsemos
    document.getElementById('pantalla').value += valor
}

// funcion para limpiar
function borrar(){
    // limpia la pantalla de la calculadora ( el txtbox)
    document.getElementById('pantalla').value = ''
}

// funcion para calcular
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    // metodo eval() que calcula un string
    const resultado = eval(valorPantalla)
    
    document.getElementById('pantalla').value = resultado
}