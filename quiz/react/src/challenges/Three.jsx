import React from "react";


const Item = (props) => {
  // Don't touch this
  if (typeof text === "string") {
    return <p data-testid="three-faulty-item">Inte ett nummer</p>
  }
  // Men detta går bra
  return (
    <p data-testid="three-item">{props.number}</p>
  )
}


// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = ({ items }) => {
  let numericItems = []
  numericItems = items.reduce(function (numericItems, item) {
    if (typeof item === 'number') {
      numericItems.push(item)
    }
    return numericItems
  }, [])
  return (
    <div>
      {
        numericItems.map(item => < Item number={item} />)
      }
    </div>
  );
};

export default Three;
