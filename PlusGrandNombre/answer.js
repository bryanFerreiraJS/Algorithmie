const plusGrandNb = (arr) => {
  let result = []
  for (elem of arr) {
    result.push(Math.max(...elem))
  }
  return result
}

plusGrandNb([
  [1, 5, 8, 3],
  [15, 47, 88, 26],
  [32, 35, 37, 39],
  [3000, 1001, 857, 1]
])
// => [8, 88, 39, 3000]