function addName() {
    return 'Vicente';
}


const listName = ['Matias', 'Adolfo', 'Hector', 'Felipe', addName()];

for (let i=0; i < listName.length; i++) {
    let text = `indice ${i}, el nombre es ${listName[i]}`
    console.log(text);
}
console.log('-------------------');

// Si no debo trabajar con el indice, solo necesito el elemento.
// La mejor opcion es for of
// Pero si necesito trabajar con el indice, una opcion es for.
for(let name of listName) {
    console.log(name);
}

console.log('-------------------');

//Agrego elemento al final de array
listName.push('Francisca');

//Agrego elemento al inicio del array
listName.unshift('Andres');

console.log(listName)

// shift: Elimino el primer elemento del array.
// este metodo me permite almacenar el valor eliminado
// en una variable para poder trabajarla si es el caso.
const nameDelete = listName.shift();

console.log('Primer elemento --> ', nameDelete);

//pop: Elimino el ultimo elemento del array
const ultimo = listName.pop();

console.log('Ultimo elemento ---> ', ultimo);

console.log('-------------------');

console.log(listName);

// splice: Metodo que me permite Corta o eliminar elementos del array y los devuelve
// primer parametro: indica posicion inicial desde donde corta
// segundo parametro: Indica la cantidad de elementos a cortar
const splice = listName.splice(0, 2);

console.log(splice);
console.log('-------------------');

//indexOf: nos devuelve el indice de un elemento en especifico.
// Solamente me devuelve la primera coincidencia.
// Si tuviesemos dos nombres iguales, me devuelve solo el primero.
const indexof = listName.indexOf('Vicente');

console.log(listName);
console.log(indexof);
console.log('-------------------');

const nameToSearch = 'Bjorn';
const i = listName.indexOf(nameToSearch);

if (i === -1) {
    console.log(`${nameToSearch} no se encuentra registrado`)
} else {
    console.log(`${nameToSearch} es el estudiante n° ${i+1}`)
}
