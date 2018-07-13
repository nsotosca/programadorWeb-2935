$(document).ready(function () {
  console.log('App init')
  var emailInputNode = $('#email')
  var nameInputNode = $('#firstName')
  var commentsInputNode = $('#comments')

  emailInputNode.one('blur', validateInputField)
  nameInputNode.one('blur', validateInputField)
  commentsInputNode.one('blur', validateInputField)

  function validateInputField (event) {
    var inputNode = $(this)

    var value = inputNode.val()

    inputNode.next().remove()
    var errorText = ''
    if (!value) {
      errorText = 'El campo está vacío'
    } else {
      if (inputNode.attr('id') === 'email') {
        if (value.indexOf('@') === -1) {
          errorText = 'Falta el arroba (@) '
        }
        if (value.indexOf('.') === -1) {
          errorText = errorText + 'Falta el punto (.)'
        }
      }
    }

    if (errorText) {
      var parentNode = inputNode.parent()
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateInputField)
    }
    validateButton()
  }
  function validateButton () {
    var validNodes = $('.is-valid')
    var button = $('#submitButton')
    if (validNodes.length === 3) {
      button.removeAttr('disabled')
      console.log(button)
    } else {
      button.attr('disabled', 'true')
    }
  }
})
