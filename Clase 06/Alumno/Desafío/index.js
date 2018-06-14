function includesText(text1, text2) {
  if (text2.indexOf(text1, 0) !== -1)
    return true
  else
    return false
}


console.log(includesText('Pa', 'Patricia'))
console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Pa'))