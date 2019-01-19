const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

const onPeopleResponse = function (person) {
    console.log(`Hola, yo soy ${person.name} y mido ${person.height} metros`)
}

function getCharacterOfStarWars(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, onPeopleResponse)
}

getCharacterOfStarWars(1)
getCharacterOfStarWars(2)
getCharacterOfStarWars(3)