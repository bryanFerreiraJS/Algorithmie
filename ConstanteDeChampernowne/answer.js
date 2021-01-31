let champernowne = ""
let currentNaturalNumber = 0

while (champernowne.length <= 1_000_000) {
  champernowne += currentNaturalNumber++
}

let result = champernowne.charAt(1) * champernowne.charAt(10) * champernowne.charAt(100) * champernowne.charAt(1_000) * champernowne.charAt(10_000) * champernowne.charAt(100_000) * champernowne.charAt(1_000_000)

console.log(result) // => 210