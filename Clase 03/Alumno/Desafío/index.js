$(document).ready(function () {
  console.log('init app')

  var oper = prompt('Ingrese tipo de operacion [+][-][*][/]')
  var num1 = parseFloat(prompt('Ingrese el primer valor'), 10)
  var num2 = parseFloat(prompt('Ingrese el segundo valor'), 10)
  var flag = 1
  while (isNaN(num1) || isNaN(num2) || !num1 || !num2 || !oper || flag === 1) {
    if (!num1 || isNaN(num1)) {
      num1 = parseFloat(prompt('Valor incorrecto. Ingrese el primer valor'), 10)
    }
    if (!num2 || isNaN(num2) || (oper === '/' && num2 === 0)) {
      num2 = parseFloat(prompt('Valor incorrecto. Ingrese el segundo valor'), 10)
    }
    switch (oper) {
      case '+':
        num1 += num2;
        flag = 0
        break
      case '-':
        num1 -= num2;
        flag = 0
        break
      case '/':
        num1 = num1 / num2
        flag = 0
        break
      case '*':
        num1 = num1 * num2
        flag = 0
        break
      default:
        oper = prompt('Vuelva a ingresar tipo de operacion [+][-][*][/]')
        break
    }

  }
  if (flag === 0)
    console.log(num1)

})
