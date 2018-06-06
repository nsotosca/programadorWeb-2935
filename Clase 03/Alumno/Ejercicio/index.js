$(document).ready(function () {
  var daysOfTheWeek = ['Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato']

  for (var i = 0; i < daysOfTheWeek.length; i++) {
    switch (daysOfTheWeek[i]) {
      case 'Lunes':
      case 'Martes':
      case 'Miércoles':
      case 'Jueves':
      case 'Viernes':
        console.log(daysOfTheWeek[i] + ' es un dia habil')
        break
      case 'Sábado':
      case 'Domingo':
        console.log(daysOfTheWeek[i] + ' es fin de semana')
        break
      default:
        console.log(daysOfTheWeek[i] + ' no es un dia valido')
        break
    }
  }
})