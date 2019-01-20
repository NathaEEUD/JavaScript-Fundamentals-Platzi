const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function getCharacterOfStarWars(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $
        .get(URL, OPTS, callback)
        .fail(function () {
            console.log(`Sucedió un error. No se pudo obterner el personaje ${id}`)
        })
}

getCharacterOfStarWars(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    getCharacterOfStarWars(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        getCharacterOfStarWars(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            getCharacterOfStarWars(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                getCharacterOfStarWars(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)
                })
            })
        })
    })
})