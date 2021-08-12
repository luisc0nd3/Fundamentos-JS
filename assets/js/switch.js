console.log('Switch.js');

const day = 0;

switch(day) { // el switch evaluá con triple === es decir también valida el tipo de dato
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    default:
        console.log('Other Day');
}