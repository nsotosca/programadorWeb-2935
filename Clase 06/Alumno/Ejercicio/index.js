function deleteElement(index, numbers) {
  numbers.splice(index, 1)
  return numbers.join('-')
}
var numbers = [1, 2, 3, 4, 5]
console.log(deleteElement(3, numbers))
