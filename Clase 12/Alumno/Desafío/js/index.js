var inputEmail = $('#email')
inputEmail.blur(function () {
  var value = inputEmail.val()
  if (!value || value.indexOf('@', 1) === -1 || value.indexOf('.', 1) === -1) {
    inputEmail.removeClass('is-valid')
    inputEmail.addClass('is-invalid')
  } else {
    inputEmail.removeClass('is-invalid')
    inputEmail.addClass('is-valid')
  }
})
