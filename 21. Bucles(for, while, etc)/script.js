// ejemplo de bucles
let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

/* ejecutar esta seccion en el html
let select = document.getElementById('select')
let texto = ''

/* mostrar el array atravez de un bucle for
for(let index = 0; index < tecnologias.length; index++){
    console.log(tecnologias[index]);
}

// otraa forma de mostrarlo mas ordenado
for(let index = 0; index < tecnologias.length; index++){
    texto += tecnologias[index] 
    if(index < tecnologias.length - 1){
        texto += ', '
    }
    select.textContent = texto

}
aqui termina la seccion */

// EJEMPLO DE FOR OF
for(tecnologia of tecnologias){
    console.log(tecnologia);
}


// ejemplo para recorre un objeto