var age = 27;

//age = age + 1
age += 1;

var weight = 50;

//weight = weight - 10
weight -= 10;

var sandwich = 1;
weight = weight + sandwich;

var playSoccer = 3
weight -= playSoccer;

var priceWine = 200.3;
var total = priceWine * 3; // 600.9000000000001
var total = priceWine * 100 * 3 / 100; // 600.9
var total = Math.round(priceWine * 100 * 3) / 100; // Funciona sin importar la cantidad de decimales que tenga
var totalStr = total.toFixed(2); // Cantidad de decimales 600.90
var totalFloat = parseFloat(totalStr); // 600.9

var pizza = 8;
var person = 2;
var portionsPerPerson = pizza / person; // 4