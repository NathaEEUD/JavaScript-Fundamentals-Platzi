const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function getCharacterOfStarWars(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    return new Promise((resolve, reject) => {
        $.get(URL, OPTS, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    }) 
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

getCharacterOfStarWars(1)
    .then(function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)
    })
    .catch(onError)