function deleteElement(index, numbers) {
  if (Array.isArray(numbers)) {
    var numbersCopy = []
    numbersCopy = numbers.slice()
    numbersCopy.splice(index, 1)
    return numbersCopy.join('-')
  } else {
    return 'No es array'
  }
}
var numbers = [1, 2, 3, 4, 5]
console.log(numbers.join('-'))
console.log(deleteElement(0, numbers))
