import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const category = ['All', ...new Set(items.map((item) => item.category))];

function App() {
  const [categorySwitch, setCategorySwitch] = useState(items);

  const showCategory = function (category) {
    if (category === 'All') return setCategorySwitch(items);
    const itemCategory = items.filter((item) => item.category === category);
    setCategorySwitch(itemCategory);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {category.map((item) => (
            <Categories items={item} key={item} showCategory={showCategory} />
          ))}
        </div>
        <div className="section-center">
          {categorySwitch.map((item) => (
            <Menu key={item.id} data={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
