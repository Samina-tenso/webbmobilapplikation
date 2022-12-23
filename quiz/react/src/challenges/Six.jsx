import React, { useState } from 'react'

// Slutför följande komponent.
// Tanken är att den ska skriva ut för och efternamn som t.ex.
// "Hi, my name is: Oscar Nilsson" i p-taggen.
//
// Det saknas några delar för att den ska göra det.
// Identifiera de sakerna som saknas och fixa komponenten!

function Six() {
  // Ändra inte statet nedan
  const [input, setInput] = useState({})

  function handleInput(e) {
    const { target: { name, value } } = e
    let inputName = name
    // Rör inte funktionen nedan
    setInput(input => ({ ...input, [inputName]: value }))
    console.log(input)
  }

  return (
    <div>
      <p data-testid="six-text">Hi, my name is: {input.firstName} {input.lastName}</p>
      <input type="text" name="firstName" data-testid="six-firstName" onChange={(e) => handleInput(e)} />
      <input type="text" name="lastName" data-testid="six-lastName" onChange={(e) => handleInput(e)} />
    </div>
  )
}

export default Six