import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = value;
    console.log("Use Effect");
  });

  const clickHandler = () => {
    setValue(value + 1);
    console.log("Use State");
  };
  console.log("Component Re-render");

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={clickHandler}>
        Click me!
      </button>
    </>
  );
};

export default UseEffectBasics;
