var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

function permitirAcceso(persona) {
    if(esMenorDeEdad(persona)) {
        console.log('Acceso DENEGADO!')
    } else {
        console.log('Acceso PERMITIDO!')
    }
}

permitirAcceso(juan);
permitirAcceso(sacha);