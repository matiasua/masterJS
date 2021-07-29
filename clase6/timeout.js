// let timeVar = 0;

// function after3Secs() {
//     timeVar = 1;
//     console.log('DONE !', timeVar);
// }

// const timer = setTimeout(after3Secs, 3000);

// clearInterval(timer);

// console.log(timeVar);

//------------------------------

let seconds = 0;

function intervaled() {
    seconds++;
    console.log(seconds + ' Segundos ');
}

const interval = setInterval(intervaled, 1000);

function clear() {
    clearInterval(interval)
};

setTimeout(clear, 10000);