import { getData } from '../utils/ajax'

function searchController () {
  console.log('Búsqueda')

  searchPeople()

  var searchButtonNode = $('#searchButton')

  searchButtonNode.click(searchPeople)
}

function searchPeople () {
  var tableBodyNode = $('#tableBody')

  tableBodyNode.empty()

  var searchInputNode = $('#search')

  var value = searchInputNode.val()

  var url = 'https://swapi.co/api/people/?search=' + value

  getData(url, function (error, data) {
    if (!error) {
      console.log(data)
    }
  })
}

export default searchController
