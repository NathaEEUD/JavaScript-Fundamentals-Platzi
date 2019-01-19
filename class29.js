const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function getCharacterOfStarWars(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(URL, OPTS, function (person) {
        console.log(`Hola, yo soy ${person.name} y mido ${person.height} metros`)

        if (callback) {
            callback()
        }
    })
}

getCharacterOfStarWars(1, function () {
    getCharacterOfStarWars(2, function () {
        getCharacterOfStarWars(3)
    })
})