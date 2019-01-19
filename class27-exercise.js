const API_URL = 'https://swapi.co/api/'

const OPTS = { crossDomain: true }

const OPTS_TO_SEARCH = prompt('Seleccione que lo desea buscar \n 1. Persona \n 2. Planeta \n 3. Nave')
const ID = prompt('Ingrese el id a buscar \n Tenga en cuenta que son números enteros\n Ejemplo: 5')

switch (OPTS_TO_SEARCH) {
    case '1':
        const PEOPLE_URL = 'people/:id'
        cadena = 'La persona'
        search(PEOPLE_URL, ID, cadena)
        break;
    case '2':
        const PLANET_URL = 'planets/:id'
        cadena = 'El planeta'
        search(PLANET_URL, ID, cadena)
        break;
    case '3':
        const STARSHIPS_URL  = 'starships/:id'
        cadena = 'La nave'
        search(STARSHIPS_URL, ID, cadena)
        break;

    default:
        console.log(`La información que ingresaste es incorrecta`)
        break;
}

function search(queBuscar, id, cadena) {
    const URL = `${API_URL}${queBuscar.replace(':id', id)}`

    $.get(URL, OPTS, function onSearchResponse(data) {
        console.log(`Estas buscando ${cadena}: ${data.name}`)
    } )
}