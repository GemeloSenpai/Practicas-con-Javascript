// Scope

let x = 5 


// se realiza el 2 con su console log en las llaves, pero si adentro no estuviese definido x = 2 entonces el valor de x seria 5
// porque el valor esta disponible. se dice que lo que esta en las llaves es hijo y lo de afuera padre
{
    let x = 2
    console.log(x)
}

// aqui x vale 5
console.log(x)