const lengthOfInteger = integer => integer.toString().length

let array = [BigInt(0), BigInt(1)]

while (lengthOfInteger(array[array.length - 1]) != 1000) {
  array.push(array[array.length - 1] + array[array.length - 2])
}

console.log(array.length - 1) // => 4782