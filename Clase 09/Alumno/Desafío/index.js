var inputNode = document.getElementById('email')

inputNode.onblur = validar

function replaceClass (classAdd, classRemove, node) {
  node.classList.remove(classRemove)
  node.classList.add(classAdd)
}

function validar (event) {
  var node = event.target
  var messageNode
  if (!node.value) {
    replaceClass('is-invalid', 'is-valid', node)
  } else if (node.value.indexOf('@', 1) === -1) {
    replaceClass('is-invalid', 'is-valid', node)
  } else if (node.value.indexOf('.', 1) === -1) {
    replaceClass('is-invalid', 'is-valid', node)
  } else {
    replaceClass('is-valid', 'is-invalid', node)
  }
}
