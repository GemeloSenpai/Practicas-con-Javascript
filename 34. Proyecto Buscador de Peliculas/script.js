document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '97a50b65795f42a179b6772441950a02'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

// funcion para buscar la pelicula
function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value 

    // llamar a la api, por ultimo la pelicula
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''
    // si viene vacio mostramos mensaje
    if(movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontraron resultados para tu bisqueda </p>'
        return // sale del display
    }

    // si hubiese mas de una pelicula
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        // revisar en inspeccion del codigo los datos consumidos de una api
        // title es traida desde la api
        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        // release_date es traida desde la api
        releaseDate.textContent = 'La fecha lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        // overview es traida desde la api
        overview.textContent = movie.overview

        // poster_path es traida desde la api
        let posterPath = urlImg + movie.poster_path 
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    });
}
