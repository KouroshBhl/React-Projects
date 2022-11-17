import React, { useState } from "react";

const Tour = ({ data, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  if (!data) return;

  return (
    <>
      {data.map((tour) => {
        const { id, image, info, name, price } = tour;
        return (
          <article className="single-tour" key={id}>
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">{price}$</h4>
              </div>
              <p>
                {readMore ? info : info.substring(0, 200)}
                <button
                  onClick={() => setReadMore((prevReadMore) => !prevReadMore)}
                >
                  {readMore ? "Show less" : "Read more"}
                </button>
              </p>
              <button className="delete-btn" onClick={() => removeTours(id)}>
                Not interested
              </button>
            </footer>
          </article>
        );
      })}
    </>
  );
};

export default Tour;
