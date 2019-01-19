const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS = { crossDomain: true }

// $.get(LUKE_URL, OPTS, function (luke) {
//     console.log(`Hola, yo soy ${luke.name} y mido ${luke.height} metros`)
// })

const onPeopleResponse = function (luke) {
    console.log(`Hola, yo soy ${luke.name} y mido ${luke.height} metros`)
} 

$.get(LUKE_URL, OPTS, onPeopleResponse)