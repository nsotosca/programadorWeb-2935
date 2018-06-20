var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

function saveLocalList (array) {
  if (Array.isArray(array)) {
    array = JSON.stringify(array)
    localStorage.setItem('list', array)
  }
}
saveLocalList(studentsList)

function getLocalList (key) {
  if (key) {
    var array = localStorage.getItem(key)
    array = JSON.parse(array)
    if (Array.isArray(array)) {
      return array
    } else {
      var array = []
      return array
    }
  } else return (array = [])
}

console.log(getLocalList('list'))
