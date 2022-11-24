import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const resizeEvent = function () {
    setSize(this.window.innerWidth);
  };

  useEffect(() => {
    console.log("UseEffect");
    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  });

  return (
    <>
      <h2>Size</h2>
      <h1>{size}PX</h1>
    </>
  );
};

export default UseEffectCleanup;
