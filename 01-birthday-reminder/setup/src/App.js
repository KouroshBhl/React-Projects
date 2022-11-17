import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [birthdays, setBirthdays] = useState(data);

  return (
    <section className="section">
      <main>
        <div className="container">
          <h3>{birthdays.length} Birthdays Today</h3>
          {birthdays.map((person) => (
            <List
              key={person.id}
              name={person.name}
              age={person.age}
              image={person.image}
            />
          ))}
          <button onClick={() => setBirthdays([])}>Clear All</button>
        </div>
      </main>
    </section>
  );
}

export default App;
