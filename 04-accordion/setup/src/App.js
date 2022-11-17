import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>
        <section className="info">
          {data.map((el) => (
            <SingleQuestion key={el.id} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
