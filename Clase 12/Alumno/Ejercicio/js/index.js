var squareNodes = $('.square')
var cont = 0
squareNodes.click(function () {
  var squareNode = $(this)
  if (!squareNode.hasClass('cross') && !squareNode.hasClass('circle')) {
    if (cont % 2 === 0) {
      squareNode.addClass('circle')
    } else {
      squareNode.addClass('cross')
    }
    cont = cont + 1
  }
})
