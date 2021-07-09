//La definición de las funciones, se recomienda siempre se encuentre hasta arriba del archivo
//esto debido al barrido previo que hace js.
function saludar(){
    console.log('¡Hola Mundo!');
}

//Es mejor usar funciones anonimas en vez de funciones normales
const myfunction = function(name){
    console.log('arguments:', arguments); // arguments es un objeto unico de la funcion y sirve para cachar los argumentos pasados a la function
    console.log('¡Hola ' + name + '! desde una funcion anonima');
}

//funcion de flecha
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

//funcion de flecha con argumentos
const saludarFlechaByArgs = (name) => {
    console.log('Hola ' + name + ' Flecha by args');
}

console.log('funciones.js');

// var saludar = 123; si hacemos esto le partimos la madre a la funcion, aun usando let sale un error

saludar();
saludar();
saludar();

// myfunction();
myfunction('Luis');
// myfunction = 123; esto ya no se podría hacer debido al const, es solo una manera de blindar la funcion}

//ejemplo de arguments
myfunction('Luis', 28, true, 'Poza Rica');

saludarFlechaByArgs('Alicia')