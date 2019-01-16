var natha = {
    nombre: 'Nathaly',
    apellido: 'Riaño',
    edad: 26
}

// function printNameUpperCase(persona) {
//     var nombre = persona.nombre.toUpperCase();
//     console.log(nombre);
// }
function printNameUpperCase1(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

function printNameUpperCase2({ nombre, edad }) {
    console.log(nombre.toUpperCase());
    console.log(edad);
}

printNameUpperCase1(natha);