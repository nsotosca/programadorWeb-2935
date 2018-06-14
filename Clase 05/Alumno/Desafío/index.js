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

function Student(_firstName, _lastName, _dni, _email) {
  this.firstName = _firstName
  this.lastName = _lastName
  this.dni = _dni
  var _id = _dni
  this.email = _email

  this.getId = function () {
    return _id
  }
  this.getFullName = function () {
    if (this.lastName) {
      var fullName = this.firstName + ' ' + this.lastName
    } else {
      var fullName = this.firstName
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
