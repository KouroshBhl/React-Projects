import React, { useState, useEffect } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = people[index];

  useEffect(() => {
    const time = setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex === people.length - 1) {
          return (prevIndex = 0);
        }
        return (prevIndex += 1);
      });
    }, 2000);

    return () => clearTimeout(time);
  }, [index]);

  const nextPersonHandler = function () {
    if (index === people.length - 1) return setIndex(0);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const prevPersonHandler = function () {
    if (index === 0) setIndex(people.length);
    setIndex((prevIndex) => prevIndex - 1);
  };

  const randomSliderHandler = function () {
    let random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="authot">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPersonHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPersonHandler}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomSliderHandler}>
        Surprise me!
      </button>
    </article>
  );
};

export default Review;
