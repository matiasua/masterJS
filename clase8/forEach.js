const students = [
    {name: 'Pedro', age:30 },
    {name: 'Juan', age:25 },
    {name: 'Diego', age:35 }
  ];

  const oldStudents = [];

  students.forEach(st => {
    if(st.age > 25) {
      oldStudents.push(st);
    }
  });

  console.log(oldStudents);