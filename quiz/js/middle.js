

// Skriv en funktion som tar mitten-elementet
// från den givna arrayen och returnerar det värdet
//
// array[2] är fel svar, utgå från att du inte vet längden på
// arrayen men att den alltid är ojämnt lång (dvs: 1, 3, 7, 9, 13).

const middle = (array1, index) => {
  // Skriv din kod här
  if (array1.length % 2 != 0) {
    return array1[Math.floor((array1.length - 1) / 2)]
  }
}

const result1 = middle(["1", "2", "3", "4", "5",])
const result2 = middle(["A", "B", "C", "D", "E", "F", "G", "H", "I"])
console.log(result1); // "3"
console.log(result2); // "E"

module.exports = middle;