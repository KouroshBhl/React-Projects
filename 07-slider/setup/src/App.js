import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <section className="section-center">
        {data.map((slide, cur) => {
          let position = "nextSlide";
          if (cur === index) position = "activeSlide";
          if (cur === index - 1 || (index === 0 && cur === data.length - 1))
            position = "lastSlide";

          return (
            <article key={slide.id} className={position}>
              <img src={slide.image} alt={slide.name} className="person-img" />
              <h4>{slide.name}</h4>
              <p className="title">{slide.title}</p>
              <p className="text">{slide.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="next" onClick={() => setIndex((prev) => prev + 1)}>
          <FiChevronRight />
        </button>

        <button className="prev" onClick={() => setIndex((prev) => prev - 1)}>
          <FiChevronLeft />
        </button>
      </section>
    </section>
  );
}

export default App;
