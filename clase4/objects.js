const students = [
    {id: 1, nombre: 'Matias Cardenas'},
    {id: 2, nombre: 'Felipe Espinoza'}
]

function addStudentToList(id, name) {
    students.push({
        id: id,
        name: name,
        isLoggedIn: false,
        requestConnection: function() {
            console.log('Deseo ingresar a clases');
        }
    });
}


addStudentToList(3, 'Andres Vidal');

const studentSelected = students[0];
console.log(studentSelected);
studentSelected.requestConnection();




console.log(students)