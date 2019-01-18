const INDICE_DE_ALTURA = 1.8
var esAlto = altura => altura > INDICE_DE_ALTURA

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
    }
}

var natha = new Desarrollador('Nathaly', 'Riaño', 1.58)
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)