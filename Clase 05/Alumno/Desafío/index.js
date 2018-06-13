var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

function Student(firstName, lastName, dni, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  var id = dni
  this.email = email

  this.getId = function () {
    return id
  }
  this.getFullName = function () {
    if (lastName) {
      var fullName = firstName + ' ' + lastName
    } else {
      var fullName = firstName
    }
    return fullName
  }
}

var studentsNewArray = []

for (var i = 0; i < students.length; i++) {
  studentsNewArray.push(new Student(students[i].firstName, students[i].lastName, students[i].dni, students[i].email))
}

for (var i = 0; i < studentsNewArray.length; i++) {
  console.log('DNI: ' + studentsNewArray[i].getId())
  console.log('Nombre completo: ' + studentsNewArray[i].getFullName())
  console.log('*--------------------*')

}
