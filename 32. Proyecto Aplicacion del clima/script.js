// colocamos la API
let api_key = 'cc66659493f235864422972a378fd568'
// convertimos la url en dinamica
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
// convertir los kelvin que vienen de la api a celcius o F
let difKelvin = 273.15

// agrenando un evento escucha al boton en el html
document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    // creamos la variable que va a recibir la ciudad de tipo const que no cambiara
    const ciudad = document.getElementById('ciudadEntrada').value // dato que viene del input con id=ciudadEntrada
    // validamos
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

// creamos una funcion fetch
function fetchDatosClima(ciudad){
    // api funcionando correctamente
    // fetch que contiene la direccion la ciudad y la api de manera dinamica
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data)) // mostrando datos atraves de una funcion
}

// funcion para mostrar los datos
function mostrarDatosClima(data){
    //prueba en la consola
    //console.log(data)

    const divDatosClima = document.getElementById('datosClima') // el div esta aqui
    divDatosClima.innerHTML = '' // siempre que se toque buscar va a vaciar la info (vaciar), aqui estamos agarrando el div
    
    // tres constantes mas
    const ciudadNombre = data.name // en los datos que trae la api esta solo name
    const paisNombre = data.sys.country // en los datos que trae la api esta solo name
    const temperatura = data.main.temp // se encuentra en main.temp en los datos traidos
    const humedad = data.main.humidity // se encuentra en main.temp en los datos traidos
    const descripcion = data.weather[0].description // se coloca asi porque es un arreglo obtenido de una api
    const icono = data.weather[0].icon // colocando un icono que viene de la api

    // creando elementos html pero aun no se han asignado al divDatosClima
    // mostrando la ciudad
    const ciudadTitulo = document.createElement('h2') // creamos un <h2> dentro del div que agarramos
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}` // luego se coloca el nombre de la ciudad que nos va a venir

    // mostrando la temperatura
    const temperaturaInfo = document.createElement('p') // creamos un parrafo y colocamos la data que nos viene
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)} Celcius`

    // mostrando la humedad
    const humedadInfo = document.createElement('p') // creamos un parrafo y colocamos la data que nos viene
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    // mostrando iconos
    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png` // muy importante usar estas comillas ``

    // mostrando la descripcion
    const descripcionInfo = document.createElement('p') // creamos un parrafo para mostrar
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}` // mostramos la informacion

    // Agregando elementos al div
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}