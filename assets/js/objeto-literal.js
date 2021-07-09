console.log('objeto-literal.js');

let avenger = {
    name: 'Tony Stark',
    keyName: 'IronMan',
    life: false,
    age: 40,
    coords: {
        lat: 34.034,
        log: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'], //terminarlo con , es una buena practica
    address: {
        zip: '10880, 90265',
        location: 'Malibu, California'
    }
};

console.log('name', avenger.name);
console.log('age', avenger.age);
console.log('lat', avenger.coords.lat);
console.log('Suits-Count', avenger.suits.length);
console.log('ultimo-traje', avenger.suits[ avenger.suits.length - 1]);

const x = 'life';
console.log('Life',avenger[x]);

//borrado de una propiedad
console.log('avenger:', avenger);
delete avenger.age;
console.log('avenger:', avenger);

//agregar una propiedad
avenger.casado = true;

//convertir un objeto literal en un arreglo
const entriesPares = Object.entries( avenger );
console.log('entriesPares;', entriesPares);

//evitar que el objeto sea mutable
Object.freeze( avenger );
avenger.money = 1000000000;
avenger.casado = false;
console.log(avenger);

//obtener una arreglo de los nombres de las propiedades,

const properties = Object.getOwnPropertyNames( avenger );
const values = Object.values( avenger );
console.log(properties);
console.log(values);