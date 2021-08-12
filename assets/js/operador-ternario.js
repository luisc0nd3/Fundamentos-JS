console.log('Operador Ternario');

const day = 0;
const timeDay = 10;

let openTime;
let msg;

//es buena practica usar paréntesis en el operador ternario
openTime = ([0,6].includes( day ))? 9 : 11;

msg = (timeDay >= openTime)? 'It´s Open': `It´s Close, today open around ${openTime}` ;

console.log({openTime, msg});