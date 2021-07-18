console.log('Into valor-referencia.js');

// pase de valores por valor
let miVar = 20;
let tuvar = 9;

miVar = 10;
console.log({miVar});

//pase por referencia
let juan = {name:'Juan', age:29}
let ana = juan;
//let ana = {...juan} //posible solucion usando el operador Spread

ana.name = 'Ana'

console.log({ana, juan});

//otro ejemplo de pase por referencia
//const cambiaNombre = (persona) => { 
const cambiaNombre = ({...persona}) => { //esta linea soluciona el problema del pase por referencia
    persona.name = 'Tony';
    return persona;
}

let peter = {name: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

const fruits = ['Apple', 'Mango', 'Pear'];

console.time('slice ');
const otherFruits = fruits.slice();
console.timeEnd('slice ');

console.time('spread');
const otherFruits2 = [...fruits];
console.timeEnd('spread');

otherFruits.push('Orange');
console.table({fruits, otherFruits});
