import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [value, setValue] = useState(0);

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (value < 1) return setParagraphs([data[0]]);

    // setParagraphs(() => {
    //   return [...data.filter((el, index) => index < value && el)];
    // });
    setParagraphs(data.slice(0, value));
  };

  return (
    <section className="section-center">
      <h3>tired of boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={formSubmitHandler}>
        <label htmlFor="number">Paragraphs: </label>
        <input
          type="number"
          name="number"
          id="number"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {paragraphs.map((par, index) => {
          return <p key={index}>{par}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
