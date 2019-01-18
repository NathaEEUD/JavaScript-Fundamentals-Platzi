function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

const INDICE_DE_ALTURA = 1.8
var esAlto = altura => altura > INDICE_DE_ALTURA

Persona.prototype.saludar = () => {
    console.log(this)
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.clasificarAltura = function () {
    if (esAlto(this.altura)) {
        console.log(`La persona ${this.nombre} ${this.apellido} es alta`)
    } else {
        console.log(`La persona ${this.nombre} ${this.apellido} es baja`)
    }
}

var natha = new Persona('Nathaly', 'Riaño', 1.58)
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)