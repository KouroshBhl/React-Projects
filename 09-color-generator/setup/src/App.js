import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [generateColor, setGenerateColor] = useState("");
  const [isError, setIsError] = useState(false);

  const generateTonsShades = function () {
    try {
      const rgbColor = new Values(color).all();
      setGenerateColor(rgbColor);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error(`${error} 😒😒😒`);
    }
  };

  useEffect(() => {
    generateTonsShades();
  }, []);

  const formSubmitHandler = function (e) {
    e.preventDefault();
    generateTonsShades();
    if (!e.target.value) setIsError(true);
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={formSubmitHandler}>
          <input
            className={`${isError && "error"}`}
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {generateColor &&
          generateColor.map((el, index) => (
            <SingleColor key={index} color={el} index={index} />
          ))}
      </section>
    </>
  );
}

export default App;
