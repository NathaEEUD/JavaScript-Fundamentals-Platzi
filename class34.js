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

async function getCharacters() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promises = ids.map(id => getCharacterOfStarWars(id))

    try {
        var characters = await Promise.all(promises)
        console.log(characters)
    } catch (id) {
        onError(id)
    }
}

getCharacters()
