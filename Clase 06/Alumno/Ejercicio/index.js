function deleteElement(index, numbers) {
  if (Array.isArray(numbers)) {
    numbers.splice(index, 1)
    var numbersCopy = []
    numbersCopy = numbers.slice()
  } else {
    return 'No es array'
  }
  return numbersCopy.join('-')
}
var numbers = [1, 2, 3, 4, 5]
console.log(deleteElement(3, numbers))
