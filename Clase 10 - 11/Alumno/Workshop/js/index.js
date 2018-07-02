console.log('Init app')

var LS_KEY = 'studentList'

var mainListNode = document.getElementById('mainList')

var localList = getLocalList(LS_KEY)

var studentsNewArray = []

//SE RECORRE EL LOCALSTORAGE
//SI HAY DATOS, SE CREA EL OBJ STUDENT
//GUARDA EN EL ARRAY EN LA ULTIMA POSICION
//CREA UN NODO LI CON LOS DATOS Y LOS COLOCA EN LA MAINLIST
for (var i = 0; i < localList.length; i++) {
  newStudent = new Student(
    localList[i].firstName,
    localList[i].lastName,
    localList[i].dni,
    localList[i].email
  )
  studentsNewArray.push(newStudent)
  var liNode = createStudentNode(newStudent)
  mainListNode.appendChild(liNode)
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
function Student (firstName, lastName, dni, email) {
  this.firstName = firstName
  if (lastName) {
    this.lastName = lastName
  }
  this.dni = dni
  var id = dni
  this.email = email

  this.getId = function () {
    return id
  }
  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
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
    searchStudentByDni(inputNodeDni.value, studentsNewArray) !== -1
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
  validateButtonSend()
}

//BUSCAR ESTUDIANTE POR DNI
function searchStudentByDni (value, array) {
  var index = -1
  for (var i = 0; i < array.length; i++) {
    if (value === array[i].getId()) {
      index = i
      break
    }
  }
  return index
}

//FUNCION CREAR NODO CON DATOS DEL ESTUDIANTE

function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.getId()

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.getFullName() +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

//ACTIVAR O DESACTIVAR BOTON DE ENVIAR

function validateButtonSend (value) {
  var inputValid = document.getElementsByClassName('is-valid')
  var button = document.getElementById('addStudentButton')
  if (inputValid.length === 3) {
    button.disabled = false
  } else {
    button.disabled = true
  }
}

//FUNCION AGREGAR ESTUDIANTE

var saveButton = document.getElementById('addStudentButton')
saveButton.onclick = addStudent

function addStudent (event) {
  var firstName = inputFirstName.value
  var lastName = inputLastName.value || null
  var dni = inputDni.value
  var email = inputEmail.value

  var newStudent = new Student(firstName, lastName, dni, email)
  studentsNewArray.push(newStudent)

  //SE COLOCA EN EL HTML
  var liNode = createStudentNode(newStudent)
  mainListNode.appendChild(liNode)
  //SE GUARDA EN EL LOCALSTORAGE
  saveLocalList(LS_KEY, studentsNewArray)
  //LIMPIA VALOR Y CLASES DE INPUTS, SE DESHABILITA BOTON ENVIAR
  inputFirstName.value = ' '
  inputLastName.value = ' '
  inputDni.value = ' '
  inputEmail.value = ' '

  saveButton.disabled = true

  inputFirstName.classList.remove('is-valid')
  inputDni.classList.remove('is-valid')
  inputEmail.classList.remove('is-valid')
}

//ELIMINAR ALUMNO POR DNI

var delButton = document.getElementById('deleteStudentButton')
delButton.onclick = deleteStudent

function deleteStudent (event) {
  var inputNode = document.getElementById('deleteDni')
  var id = searchStudentByDni(inputNode.value, studentsNewArray)
  if (id !== -1) {
    var node = document.getElementById(inputNode.value)
    mainListNode.removeChild(node)
    studentsNewArray.splice(id, 1)
    saveLocalList(LS_KEY, studentsNewArray)
  }
}

//BUSCAR UN ALUMNO Y MOSTRAR EN MAINLIST

var searchButton = document.getElementById('searchStudentButton')
searchButton.onclick = searchStudentByText

function searchStudentByText (event) {
  var inputNode = document.getElementById('searchText')
  var firstName
  var lastName
  mainListNode.innerHTML = ' '
  if (!inputNode.value) {
    for (var i = 0; i < studentsNewArray.length; i++) {
      student = studentsNewArray[i]
      var liNode = createStudentNode(student)
      mainListNode.appendChild(liNode)
    }
  } else {
    for (i = 0; i < studentsNewArray.length; i++) {
      firstName = studentsNewArray[i].firstName
      lastName = studentsNewArray[i].lastName
      console.log(inputNode.value, lastName, firstName, studentsNewArray.length)
      if (
        includesText(inputNode.value, firstName) ||
        includesText(inputNode.value, lastName)
      ) {
        liNode = createStudentNode(studentsNewArray[i])
        mainListNode.appendChild(liNode)
      }
    }
  }
}

function includesText (text1, text2) {
  if (typeof text1 === 'string' && typeof text2 === 'string') {
    text1 = text1.toUpperCase()
    text2 = text2.toUpperCase()
    if (text2.indexOf(text1, 0) !== -1) return true
    else return false
  }
}
