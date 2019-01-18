function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

const INDICE_DE_ALTURA = 1.8
var esAlto = altura => altura > INDICE_DE_ALTURA

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.clasificarAltura = function () {
    if (esAlto(this.altura)) {
        console.log(`La persona ${this.nombre} ${this.apellido} es alta`)
    } else {
        console.log(`La persona ${this.nombre} ${this.apellido} es baja`)
    }
}

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}

var natha = new Desarrollador('Nathaly', 'Riaño')
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)