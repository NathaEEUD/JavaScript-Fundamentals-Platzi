var nombre = 'Nathaly';
var lastname = 'Riaño Bejarano';

// Methods
var nameInUpperCase = nombre.toUpperCase();
console.log(nameInUpperCase);

var lastnameInLowerCase = lastname.toLowerCase();
console.log(lastnameInLowerCase);

var firstLetterOfTheName = nombre.charAt(0);
console.log(firstLetterOfTheName);

// Attributes
var lenghtOfName = nombre.length;
console.log(lenghtOfName);

// Concatenation
var fullName = nombre + ' ' + lastname;
console.log(fullName);

// Interpolation
var fullName = `${nombre} ${lastname}`;
console.log(fullName);

var fullName = `${nombre} ${lastname.toUpperCase()}`;
console.log(fullName);

var str = nombre.substr(1, 2);
console.log(str);

var lastLetterOfTheName = nombre.substr(-1);
console.log(lastLetterOfTheName);