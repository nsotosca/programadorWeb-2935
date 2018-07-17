$(document).ready(function () {
  var button = $('.btn-danger')
  button.on('click', removeElementWithAnimation)
  function removeElementWithAnimation (event) {
    $(this).parent().parent().toggle(400, function () {
      $(this).remove()
    })
  }
})
