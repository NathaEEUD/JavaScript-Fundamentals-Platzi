var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto de Drone')
    }
}

imprimirProfesiones(sacha)

function mayorDeEdad(persona) {
    // let { edad } = persona;

    // if (edad >= 18) {
    //     console.log(`${persona.nombre} es mayor de edad`)
    // } else {
    //     console.log(`${persona.nombre} es menor de edad`)
    // }

    console.log(`${persona.nombre} es ${persona.edad >= 18 ? 'mayor' : 'menor'} de edad`)
}

mayorDeEdad(sacha);