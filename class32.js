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
    .then((personaje1) => {
        console.log(`El personaje 1 es ${personaje1.name}`)
        return getCharacterOfStarWars(2)
    })
    .then((personaje2) => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return getCharacterOfStarWars(3)
    })
    .then((personaje3) => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return getCharacterOfStarWars(4)
    })
    .then((personaje4) => {
        console.log(`El personaje 4 es ${personaje4.name}`)
    })
    .catch(onError)