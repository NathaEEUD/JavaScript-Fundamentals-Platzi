var natha = {
    nombre: 'Nathaly',
    apellido: 'Riaño',
    edad: 26
}

// function printNameUpperCase(persona) {
//     var nombre = persona.nombre.toUpperCase();
//     console.log(nombre);
// }

function printNameUpperCase({ nombre }, { edad }) {
    console.log(nombre.toUpperCase());
    console.log(edad);
}

printNameUpperCase(natha);