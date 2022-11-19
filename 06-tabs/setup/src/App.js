import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const getData = async function () {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  const [data, setData] = useState();
  const [value, setValue] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  if (!data)
    return (
      <section className="section">
        <h1 className="loading">Loading...</h1>
      </section>
    );
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((el, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"} `}
                key={index}
                onClick={() => setValue(index)}
              >
                {el.company}
              </button>
            );
          })}
        </div>

        {[data[value]].map((job) => {
          const { id, company, dates, order, title, duties } = job;
          return (
            <article className="job-info" key={id}>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((el, index) => {
                return (
                  <div className="job-desc" key={index}>
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{el}</p>
                  </div>
                );
              })}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;
