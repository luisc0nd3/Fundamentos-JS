// console.log('Into if-else.js');

// let age = prompt('¿Cuál es tu edad?');

// if (age >= 18) { // casos especiales, undefined, null, asignación
//     console.log('Acceso Permitido :)');
// } else {
//     console.log('Acceso Denegado :(');
// }

const day = new Date();
console.log({ day });

let myDay = day.getDay();
console.log({ myDay });

//if (myDay = 0) { //esto es una asignación y es un error lógico común
//if(myDay == 0) { //compara si el valor es igual sin importar el tipo de dato es decir 0=='0' is true
// if (myDay === 0) { //valida el tipo de dato y el valor
//     console.log('Sunday');
// } else {
//     console.log('Other day');
// }

if (myDay === 0) {
    console.log('Sunday');
} else if (myDay === 1) {
    console.log('Monday');
} else {
    console.log('Other day');
 }

myDay = 10;
console.log({ myDay });
const days = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'viernes',
    6: 'Sábado',
}

console.log(days[myDay] || 'Other day');