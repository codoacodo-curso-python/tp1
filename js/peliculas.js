
$(function(){
    connect()
})

function connect(){


    let search = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr'

    let mostPopular = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US'





    fetch(search,{
        'method': 'GET',
        'headers': {
            'X-RapidAPI-Key': 'ae7111c411msh0da5407dc687e55p11b3cfjsn1fb2f5b0c5e7',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    })

    .then(response => response.json())
    .then(data => {
        const list = data.d

        console.log(list)

        list.map((item) => {

            const name = item.l
            const poster = (typeof item.i === "undefined") ? '' : item.i.imageUrl
            const movie = `<li><img src="${poster}" alt="Imagen de ${name}"><h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie
        })
    })
    .catch(err => {
        console.log(err);
    })
}
