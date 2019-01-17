var natha = {
    nombre: 'Nathaly',
    apellido: 'Riano',
    edad: 26,
    peso: 50
}

console.log(`Al inicio del año ${natha.nombre} pesa ${natha.peso} kg`)

const INCREMENTO_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => {return Math.random() < 0.3}
const realizaDeporte = () => {return Math.random() < 0.4}

const META = natha.peso - 3
var dias = 0

while (natha.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentarDePeso(natha)
    }

    if (realizaDeporte()) {
        adelgazar(natha)
    }

    dias++
}

console.log(`Pasaron ${dias} días hasta que ${natha.nombre} adelgazó 3 kg`)