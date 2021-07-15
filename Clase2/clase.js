const stringfied = String(22);
const numericfied = Number('11');

const stringfiedShortcut = 22+''; // String
const numericfiedShortcut = +'23'; // Number

console.log(stringfied);
console.log(typeof stringfied);

console.log(numericfied);
console.log(typeof numericfied);

console.log(stringfiedShortcut);
console.log( typeof stringfiedShortcut);

console.log(numericfiedShortcut);
console.log(typeof numericfiedShortcut);


const asignacion = 2; // 2
const suma = 2 + 3; // 5
const resta = 2 - 1; // 1
const multiplicar = 2 * 2; //4
const dividir = 4 / 2; // 2
const negarValor = !true; // false
const residuo = 7 % 3; // 1

const init = 0;

init ++; // 1
init += 1; // 2 // init = init + 1;
init --; // 1
init -= 1; // 0 // init = init - 1;

init = 2;
init *= 3; // 6 // init = init * 3;
init /= 2 // 3 // init = init / 2;


const num = [1,2];
num.push(3);

console.log(num);




const num = 22;
const str = '22';

// Podemos ver que == implica que los valores son iguales, pero el tipo de variable no.
// en comparacion del === que implicar que el tipo de variable y valor sean iguales. 
// siempre es buena practica ocupar el ===.
console.log('==', num == str); // true
console.log('===', num === str); // false

const concate = num + str;
console.log(concate);


const myAge = 18;

if (myAge >= 65) {
    console.log("Estimado, debe jubilarse");
} else if (myAge >= 18) {
    console.log("Estimado, usted es mayor de edad");
} else {
    console.log("Mi niño, es menor de edad");
}


ternario
const isEnabled = myAge >= 65; 
// comparacion ? verdadero : falso;
const message = myAge >= 65 ? 'Es jubilado': 'no es jubilado';

console.log(isEnabled, message);


// Roles de usuario
// 1 admin
// 2 user
// 3 invitado

role = 1;

switch (role) {
    case 1:
        console.log('admin');
        break;

    case 2:
        console.log('user');
        break;

    default:
        console.log('invitado');
        break;
}


function suma(v1, v2) {
    console.log('v1 es', v1, 'v2 es', v2);
    console.log('v1 es ' + v1, ' v2 es ' + v2);
    return v1 + v2;
}

const resultado = suma(1,2);

console.log(`la suma es `, resultado)


 