// filter
// este metodo permite armar un nuevo array
// con los elementos que pasen la condicion
// propuesta mediante un callback.

const nums = [1,2,3,4,5,6,7,8,9];

const evenNums = nums.filter(num => num % 2 === 0);

console.log(evenNums)