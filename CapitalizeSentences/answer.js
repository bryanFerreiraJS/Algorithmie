function capitalizeOneWord(word) {
  const lowerWord = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lowerWord.slice(1)
}

function maj(str) {
  const splitedStr = str.split(' ')
  const splitedStrCapitalized = splitedStr.map(word => capitalizeOneWord(word))
  return splitedStrCapitalized.join(" ");
}

maj("Les sanglots longs des violons de l'automne...") // => "Les Sanglots Longs Des Violons De L'automne..."