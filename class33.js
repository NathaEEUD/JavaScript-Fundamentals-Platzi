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

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(id => getCharacterOfStarWars(id))
Promise
    .all(promesas)
    // .then(personajes => console.log(personajes))
    // .then(personajes => {
	// 	for(i=0; i< personajes.length; i++)
	// 	{
    //         console.log(personajes[i].name)
	// 	}
    // })
    .then(personajes =>
        personajes.forEach(personaje => console.log(`Hola, yo soy ${personaje.name}`))
    )
    .catch(onError)