function includesText (text1, text2) {
  if (typeof text1 === 'string' && typeof text2 === 'string') {
    text1 = text1.toUppercase()
    text2 = text2.toUppercase()
    if (text2.indexOf(text1, 0) !== -1) return true
    else return false
  }
}

console.log(includesText('Pa', 'Patricia'))
console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Pa'))
