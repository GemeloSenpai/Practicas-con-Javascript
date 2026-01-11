// condicionales

// Puede entrar este chico al boliche?

let edadChico = 19

if(edadChico >= 18){
    console.log('El Chico si puede ingresar al boliche')
}else{
    console.log('El chico no puedes ingresar al boliche')
}


// otro ejemplo para personas menores y de tercera edad
let edadPersona = 19
//let edadPersona = 61
//let edadPersona = 15


if(edadPersona >= 18 && edadPersona < 60){
    console.log('Si puede ingresar al boliche')
}else if(edadPersona <= 18){
    console.log('No puedes ingresar al boliche porque eres menor de edad')
}else{
    console.log('No puedes ingresar al boliche porque eres de 3 edad y no se recomienda')
}

// ejemplo de if anidado
let edad = 18
let nacionalidad = 'Argentino'
let tienePasaporte = true

if(edad >= 18){
    console.log('Tienes edad para viajar, Aprobado tramite 1')
    if(nacionalidad == 'Argentino' || nacionalidad == 'Argentina'){
        console.log('La documentacion esta correcta, Aprobado tramite 2')
        if(tienePasaporte){
            console.log('Usted puede viajar, Buen viaje')
        }else{
            console.log('No puedes viajar porque el pasaporte es obligatorio')
        }
    }else{
        console.log('Debes presentar la documentacion de tu pais de origen para poder viajar')
    }
}else{
    console.log('Debes ser mayor de edad para viajar al exterior')
}



//ejemplo de un switch
let estiloMusica = 'Punk'
// let estiloMusica = 'et'

switch (estiloMusica) {
    case 'Punk':
        console.log('Te recomiendo los Ramones')
    break;

    case 'Blues':
        console.log('Te recomiendo los qwerty')
    break;

    case 'Pop':
        console.log('Te recomiendo los asdf')
    break;

    case 'Metal':
        console.log('Te recomiendo los rfgtc')
    break;

    case 'Jazz':
        console.log('Te recomiendo los erty')
    break;

    default:
        console.log('No conozco esta musica, pero te recomiendo la cristiana')
    break;
}