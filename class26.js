const INDICE_DE_ALTURA = 1.8
var esAlto = altura => altura > INDICE_DE_ALTURA

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        // let nombre = this.nombre
        // let apellido = this.apellido
        let { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)

        if(fn) {
            fn(nombre, apellido, false)
        }
    }

    clasificarAltura() {
        if (esAlto(this.altura)) {
            console.log(`La persona ${this.nombre} ${this.apellido} es alta`)
        } else {
            console.log(`La persona ${this.nombre} ${this.apellido} es baja`)
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        // let nombre = this.nombre
        // let apellido = this.apellido
        let { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador/a`)

        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día, ${nombre} ${apellido}`)
    
    if(esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var natha = new Desarrollador('Nathaly', 'Riaño', 1.58)
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)

natha.saludar(responderSaludo)
sacha.saludar(responderSaludo)