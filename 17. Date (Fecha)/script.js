// fecha con el siguiente formato: AAAA-MM-DD   (Forma ISO)
//                                 MM/DD/AAAA   (Forma Short)
//                                 Mar 25 2024  (Forma Long)

const fecha = new Date()
// podemos establecer los vaores con set
// fecha.setFullYear(2019)
// fecha.setMoth(3)
// fecha.setDate(22)

//console.log(fecha)

// traer solo el año
//console.log(fecha.getFullYear())

// traer el indice del mes, pero el indice de los meses inicia en 0 para enero y finaliza en 11 para diciembre
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
//let resultado = meses[fecha.getMonth()]
// Muestra el mes basado en un array
//console.log(resultado)
// muestra el indice del mes basado en un array
//console.log(fecha.getMonth())
 
// otra manera de obtener fecha seria la siguiente tambien podemos sumar un uno al indice del mes para que sea correcto
let resultado2 = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear()
// console.log(resultado2)

