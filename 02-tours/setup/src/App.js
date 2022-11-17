import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tour, setTour] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getTour = async function () {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        throw new Error("No data!");
      }
      setTour(data);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  const removeTours = function (id) {
    setTour(tour.filter((el) => el.id !== id));
  };

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>{tour.length === 0 ? "No Tour left!" : "Our Tours"}</h2>
          {tour.length === 0 && (
            <button onClick={getTour} className="btn">
              Refresh
            </button>
          )}
          <div className="underline"></div>
        </div>
        <Tours data={tour} removeTours={removeTours} />
      </section>
    </main>
  );
}

export default App;
