const apiKey = '63d6fdcd'; // Clave API de OMDB
const id = 'tt3896198'; // ID de la película a buscar

// URL de la API
const url = `https://www.omdbapi.com/?i=tt3896198&apikey=63d6fdcd`;

// Realiza la solicitud a la API
fetch(url)
  .then(response => response.json())
  .then(data => {

// Muestra datos de la película
    console.log('Título: ' + data.Title);
    console.log('Año: ' + data.Year);
    console.log('Director: ' + data.Director);
    
  })
  .catch(error => {
    console.error('Error al obtener datos de la API', error);
  });