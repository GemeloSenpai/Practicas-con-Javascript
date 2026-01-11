/* quitar comentario para que funcione
// uso de try catch con throw
try{
    // aqui colocamos codigo que sabemos que puede fallar 
    console.log('LLamando al backend')
    
    // fuerza un error 
    throw('Este cliente no esta acto para la compra')

    // como se observa sale oscuro porque el throw no dejara que se ejecure
    console.log('Salio todo bien')
}catch(error){ // capturamos el error
    // tomamos el error y lo manejamos
    console.log('Algo fallo', error) // colocamos el error que se especifico en throw

}finally{
    // siempre se ejecutara sea que falle o no
    console.log('Se ejecutara siempre')
}
fin de comentarios de ejemplo */


// otro ejemplo de uso de try catch finally
try{
    // llamado al backend (a travez de una API)
    console.log('LLamando al backend')
    
    // metodo para que tarde ( hace algo asincrono a destiempo)
    setTimeout(() => {
        console.log('El backend nos responde: ');
        console.log('Cliente Apto para la compra: ');
        //throw('El cliente no esta Apto para la compra'); // el catch no toma el error porque es asincrono
    }, 1500);

    // como se observa sale oscuro porque el throw no dejara que se ejecure
    console.log('Salio todo bien');
}catch(error){ // capturamos el error
    // tomamos el error y hacemos lo que nos parezca correcto
    console.log('Algo fallo', error);// colocamos el error que se especifico en throw

}
/*
finally{
    // siempre se ejecutara sea que falle o no
    console.log('Se ejecutara siempre');
}
*/