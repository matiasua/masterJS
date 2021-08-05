// reduce
// Este metodo permite reducir un array
// que en base a su calculo nos devuelve un unico valor.

const nums = [1, 2, 3, 4];

// acc: acumulador, curr: valor actual
//curr, recorrera el array y acumula el valor del elemento en acc. 
const sum = nums.reduce((acc, curr) => acc + curr );
console.log(sum)

// Como funciona la logica de esto.

const suma = nums.reduce((acumulador, valorActual, index) => {
    // console.log({acumulador, valorActual, index});

    return acumulador + valorActual;
}, 0);

// console.log(suma)


// Aplicacion del metodo en un carrito de compras.
const cart = [
    {product: 'Zapatos', price: 55000, id:1234},
    {product: 'Cartera', price: 40000, id:5678},
    {product: 'Botas', price: 80000, id: 15432},
    {product: 'Bufandas', price: 10000, id: 59843},
    {product: 'Zapatos', price: 65000, id:1234}
];

const totalValueReduced = cart.reduce((acc, curr, i) => {
    console.log(acc, curr, i);
    return acc + curr.price;
}, 0);

console.log(totalValueReduced);

// Caso de uso: lograr detallar el total del carrito de compras por producto

const totalProductReduced = cart.reduce((result, actual) => {

    if(!result[actual.product]) result[actual.product] = actual.price;
    else result[actual.product] += actual.price;

    return result
},{});

console.log({totalProductReduced});

