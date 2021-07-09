console.log('arreglos.js');

// const arr = new Array(10);
// console.log(arr);

// const myArray = [];
// console.log(myArray);

// let videoGame = ['Mario 3', 'Mario 1', 'HALO'];
// console.log(videoGame);
// console.log(videoGame[0]);

// let cosas = ['Mario 3', 1+2, true, function(){}, ()=>{}, {a:1}, ['X', 'Megaman', 'Zero', 'Dr. light']];
// console.log(cosas);
// console.log(cosas[2]);
// console.log(cosas[6][3]);

let videoGame = ['Zelda', 'Mario 3', 'HALO', 'SuggarRom', 'GearsOfWar', 'Chrono'];
console.log('Largo:', videoGame.length);
console.log('Primero:', videoGame[0]);
console.log('Primero:', videoGame[videoGame.length - 1]);

videoGame.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let newLength = videoGame.push('F-Zero');
console.log({newLength, videoGame});

let newLength2 = videoGame.unshift('Fire-emblema');
console.log({newLength2, videoGame});

let juegoBorrado = videoGame.pop();
console.log({juegoBorrado, videoGame});

console.log(videoGame);
let juegosBorrados = videoGame.splice(1, 2);
console.log({juegosBorrados});

console.log(videoGame);
let haloindex  = videoGame.indexOf('HALO'); //si regresa -1 significa que no lo encontro, recuerda que es caseSensitive
console.log(haloindex);