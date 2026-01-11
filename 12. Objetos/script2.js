// se han a?adido funciones en el objeto
const vendedor = {
    nombre: 'Pedro',
    empresa: 'Jasama',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function(){
        return "Pedro ha vendido un auto"
    },
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

// podemos llamar a las funciones que son claves
console.log(vendedor.vender())
console.log(vendedor.nombreCompleto())