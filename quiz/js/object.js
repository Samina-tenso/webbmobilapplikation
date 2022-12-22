
// Rör ej
const person = {
  firstName: "Oscar",
  lastName: "Nilsson",
  age: 30
}

// Skriv klart funktionen som skriver ut mitt fulla namn
// OBS: Du får inte ändra funktions-parametrarna.
function printName(first, last) {

  const fullName = `${first} ${last}`
  return fullName
}

// Du kommer även behöva ändra anropet här nedan
let result = printName(person.firstName, person.lastName) // "Oscar Nilsson"
console.log(result)
module.exports = printName