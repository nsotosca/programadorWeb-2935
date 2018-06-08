$(document).ready(function () {
  function searchStudent(value, studentsList) {
    for (var i = 0; i < studentsList.length; i++) {
      if (value === studentsList[i].firstName || value === studentsList[i].lastName || value === studentsList[i].dni) {
        index = i
        break
      } else {
        index = -1
      }
    }
    return index
  }
  var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]

  var value = prompt('A quien busca? Ingrese Nombre, apellido o dni')
  if (!isNaN(value))
    value = parseFloat(value, 10)


  var index = searchStudent(value, studentsList)

  if (index === -1) {
    console.log('No se encontro el alumno')
  } else {
    console.log('Se encontro el alumno ' + studentsList[index].firstName + ' ' + studentsList[index].lastName + ' DNI:' + studentsList[index].dni + ', en la pisición ' + index)
  }
})