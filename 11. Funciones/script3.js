
let num = "50"


// funcion clasica
function sumarDecena(numero){
    return numero + 12
}


// funcion de flecha  (si es una sola linea de codigo que retorna se puede usar asi o un parametro)
// tambien se puede usar sin parametros en caso solo se remplaza numero por ()
let sumarDecena = numero => numero + 12 

const respuesta = sumarDecena(parseInt(num))

console.log(respuesta)



// otro ejemplo
let funcion = () => console.log("Soy una funcion sin parametros")

funcion()