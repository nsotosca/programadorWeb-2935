function createStudentNode (obj) {
  var listContent = document.getElementById('studentList')
  listContent.innerHTML +=
    '<li class="list-group-item" id="' +
    obj.getId() +
    '"><h1>' +
    obj.getFullName() +
    '</h1><h3>' +
    obj.getId() +
    '</h3><p>' +
    obj.email +
    '</p></li>'
  return listContent
}
function Student (_firstName, _lastName, _dni, _email) {
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
  },
  {
    firstName: 'Jose',
    lastName: 'Lala',
    dni: 45678056,
    email: 'jose@gmail.com'
  }
]

var studentsNewArray = []

for (var i = 0; i < students.length; i++) {
  studentsNewArray.push(
    new Student(
      students[i].firstName,
      students[i].lastName,
      students[i].dni,
      students[i].email
    )
  )
  createStudentNode(studentsNewArray[i])
}

// var liNode = document.getElementById('45678956')
// liNode.parentElement.removeChild(liNode)
