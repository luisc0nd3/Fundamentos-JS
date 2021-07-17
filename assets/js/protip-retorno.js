console.log('Into protip-retorno.js');

// forma arcaica de una funcion
// function crearPersona (nombre, apellido) {
//     return { nombre: nombre,
//              apellido: apellido 
//     }
// }

//LAS FUNCIONES SIEMPRE VAN PRIMERO.
const crearPersona = ( nombre, apellido) => ({nombre, apellido});

//un protip para ver todos los argumentos es el args
const imprimeArgumentos = (...args) => {
    console.log(args);
}

//esta funcion ocupa valores por defecto en las variables
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

//ejemplo 1
const persona = crearPersona('Luis Arturo', 'Conde');
console.log(persona);

//ejemplo 2
imprimeArgumentos('Hola', 'Luis', 40, true, {name:'luis', apellido:'conde'});

//ejemplo 3
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

imprimePropiedades( tony );
