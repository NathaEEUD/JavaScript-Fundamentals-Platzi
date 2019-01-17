var x =4, y='4';
console.log(x == y); //true
console.log(x === y); //false

var sacha={
	nombre:'Sacha'
}
var otraPersona={
	nombre: 'Sacha'
}
console.log(sacha == otraPersona); //false
console.log(sacha === otraPersona); //false

var mismaPersona = sacha;
console.log(sacha == mismaPersona); //true
console.log(sacha === mismaPersona); //true

var otraPersona2 = {
	...sacha
}
console.log(sacha == otraPersona2); //false
console.log(sacha === otraPersona2); //false