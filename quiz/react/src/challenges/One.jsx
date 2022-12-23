import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";

// Gör så att "times" börjar på 0 och ökar med 1 varje gång du trycker på den.

const One = () => {
  let count = useRef(0)
  const [times, setTimes] = useState(0)
  useEffect(() => {

  }, [times])
  const handleClick = () => {
    console.log("ry")
    count.current++

    setTimes(count.current)
  }


  // Ta inte bort data-testid
  return (
    <div>
      <p data-testid="one-text" >Has been clicked {times} times.</p>
      <button data-testid="one-button" onClick={handleClick}>Click me</button>
    </div>
  );
};

export default One;
