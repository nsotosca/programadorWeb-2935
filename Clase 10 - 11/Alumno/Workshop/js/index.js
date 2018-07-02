console.log('Init app')

var LS_KEY = 'studentList'

var maintListNode = document.getElementById('mainList')

var localList = getLocalList(LS_KEY)

var studentsNewArray = []

for (var i = 0; i < localList.length; i++) {
  studentsNewArray.push(
    new Student(
      localList[i].firstName,
      localList[i].lastName,
      localList[i].dni,
      localList[i].email
    )
  )
}

//SALVAR EN LOCAL STORAGE
function saveLocalList (key, array) {
  if (Array.isArray(array) && typeof key === 'string') {
    array = JSON.stringify(array)
    localStorage.setItem(key, array)
  }
}

//TRAER DATOS DE LOCAL STORAGE
function getLocalList (key) {
  if (key) {
    var array = localStorage.getItem(key)
    array = JSON.parse(array)
    if (Array.isArray(array)) {
      return array
    } else {
      array = []
      return array
    }
  } else return (array = [])
}

//FUNCION CONSTRUCTORA OBJ ESTUDIANTE
function Student (_firstName, _lastName, _dni, email) {
  this.firstName = _firstName
  if (_lastName) {
    this.lastName = _lastName
  }
  if (_email) {
    this.email = _email
  }
  this.dni = _dni
  var _id = _dni

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

//REEMPLAZAR CLASS
function replaceClass (classAdd, classRemove, node) {
  node.classList.remove(classRemove)
  node.classList.add(classAdd)
}

//LEVANTAR NOMBRE Y APELLIDO
var inputFirstName = document.getElementById('firstName')
var inputLastName = document.getElementById('lastName')

inputFirstName.onblur = validateInput
inputLastName.onblur = validateInput

function validateInput (event) {
  var inputNode = event.target
  if (!inputNode.value) {
    replaceClass('is-invalid', 'is-valid', inputNode)
  } else {
    replaceClass('is-valid', 'is-invalid', inputNode)
  }
  validateButtonSend()
}

//LEVANTAR DNI Y VALIDAR
var inputDni = document.getElementById('dni')
inputDni.onblur = validateDni
function validateDni (event) {
  var inputNodeDni = event.target
  console.log(inputNodeDni)
  var inputNodeParse = parseInt(inputNodeDni.value, 10)
  if (
    !inputNodeParse ||
    isNaN(inputNodeParse) ||
    inputNodeParse <= 0 ||
    searchStudentByDni(inputNodeParse, studentsNewArray) !== -1
  ) {
    replaceClass('is-invalid', 'is-valid', inputNodeDni)
  } else {
    replaceClass('is-valid', 'is-invalid', inputNodeDni)
  }
  validateButtonSend()
}

//VALIDAR CAMPO EMAIL
var inputEmail = document.getElementById('email')
inputEmail.onblur = validateEmail
function validateEmail (event) {
  var inputNodeEmail = event.target
  console.log(inputNodeEmail)
  if (
    !inputNodeEmail.value ||
    inputNodeEmail.value.indexOf('@', 1) === -1 ||
    inputNodeEmail.value.indexOf('.', 1) === -1
  ) {
    replaceClass('is-invalid', 'is-valid', inputNodeEmail)
  } else {
    replaceClass('is-valid', 'is-invalid', inputNodeEmail)
  }
}

//BUSCAR ESTUDIANTE POR DNI
function searchStudentByDni (value, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    if (value === studentsList[i].getId()) {
      index = i
      break
    }
  }
  return index
}

//ACTIVAR O DESACTIVAR BOTON DE ENVIAR

function validateButtonSend (value) {
  var inputValid = document.getElementsByClassName('is-valid')
  var button = document.getElementById('addStudentButton')
  if (inputValid.length === 2) {
    button.disabled = false
  } else {
    button.disabled = true
  }
}

//FUNCION AGREGAR ESTUDIANTE
