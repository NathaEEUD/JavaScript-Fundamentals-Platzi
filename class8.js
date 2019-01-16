var natha = {
    nombre: 'Nathaly',
    apellido: 'Riaño',
    edad: 26
}

// function cumple(persona) {
//     return persona.edad += 1;
// }

// console.log(cumple(natha));

function cumple2(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

console.log(cumple2(natha));
console.log(natha);
