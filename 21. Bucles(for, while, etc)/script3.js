/* ejemplo de while
let edad = 0
while(edad < 18){
    //console.log(`Tienes ${edad} años y aun eres un niño`)
    edad++
}

//console.log(`Tienes ${edad} años y ya eres mayor de edad`)
fin del ejemplo while */

/*
// ejempo de do while
let edad = 0
do{
    console.log(`Tienes ${edad} años y aun eres un niño`)
    edad++
}
while(edad < 18)

console.log(`Tienes ${edad} años y ya eres mayor de edad`)
*/

// uso de break
let edad = 0

while(edad < 18){
    console.log(edad)
    edad++
    if(edad == 15) break;
}

console.log(`Saliste del bucle porque tenes ${edad} años`)