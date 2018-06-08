$(document).ready(function () {
  var examResults = [7, 5, 6, 7, 6, 5, 4]

  function promedio(results) {
    var suma = 0
    for (var i = 0; i < results.length; i++) {
      suma = suma + results[i]
    }
    var promedio = suma / results.length
    return promedio
  }

  var resultado = promedio(examResults)
  console.log(resultado.toFixed(2))
})