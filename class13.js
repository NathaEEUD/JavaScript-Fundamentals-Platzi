var natha = {
    nombre: 'Nathaly',
    apellido: 'Riano',
    edad: 26,
    peso: 50
}

console.log(`Al inicio del año ${natha.nombre} pesa ${natha.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (let i = 1; i <= DIAS_DEL_ANO; i++) {
    let random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(natha)
    } else if (random < 0.5) {
        adelgazar(natha)
    }
}

console.log(`Al final del año ${natha.nombre} pesa ${natha.peso.toFixed(1)} kg`)