// map
//este Metodo recorre el array, permitiendo modificar
// los elementos en cada indice, luego nos devuelve
// un nuevo array con los elementos modificados.

const nums = [2, 3, 4];

const double = nums.map(num => num * 2);

console.log(double)

console.log('_____________________________')

const users = ['Roberto', 'Nicolas', 'Matias'];

const stringFields = users.map((user, index) =>`el usuario ${index+1}, se llama ${user}`);

// console.log(users, stringFields);

const students = [
    {name: 'Pedro', age:30 },
    {name: 'Juan', age:25 },
    {name: 'Diego', age:35 }
  ];

const oldStudents = [];

const finalStudents = students.map(st => {
    if(st.age > 25) {
       oldStudents.push(st);
    }
})

console.log(oldStudents)