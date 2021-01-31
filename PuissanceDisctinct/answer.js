let currentA = 2
let currentB = 2
let listOfDistinctPowers = new Set()
for (currentA; currentA <= 100; currentA++) {
  for (currentB; currentB <= 100; currentB++) {
    listOfDistinctPowers.add(Math.pow(currentA, currentB))
  }
  currentB = 2
}

console.log(listOfDistinctPowers.size)