console.log('Into lógica booleana');

const returnTrue = () => {
    console.log('-> Regresa true');
    return true;
}

const returnFalse = () => {
    console.log('-> Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(!returnTrue());
console.log(!returnFalse());

console.warn('And');
console.log(returnTrue() && !returnFalse()); // true
console.log(returnTrue() && returnFalse()); // false

console.log('-------------------------------------------------------');
console.log(returnFalse() && returnTrue()); // no ejecuta la segunda función
console.log(returnTrue() && returnFalse()); // ejecuta ambas funciones 

console.warn('Or');
console.log(returnTrue() || returnFalse()); //solo ejecuta la primera función y devuelve true
console.log(returnFalse() || returnTrue()); //ejecuta ambas funciones y devuelve true


console.warn('Asignaciones');
const a1 = true && 'Hola' && 120;
console.log({a1});

const b1 = false && 'Hola' && 120;
console.log({b1});

const c1 = false && 'Hola' && 120;
console.log({b1});