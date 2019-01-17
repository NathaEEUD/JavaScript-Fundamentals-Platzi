var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

for (let i = 0; i < personas.length; i++) {
    let persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}

personas.forEach(persona => {
    console.log(`${persona.nombre} mide ${persona.altura}`)
});

personas.map((persona) => {
  console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}`)
})

const array = [
  function () {
    console.log('hola')
  },
  function () {
    console.log('mundo')
  },
  function () {
    console.log('!')
  }
]