import React from 'react';

const Categories = ({ items, showCategory, setCategorySwitch }) => {
  console.log(items);
  return (
    <button
      type="button"
      className="filter-btn"
      onClick={() => showCategory(items)}
    >
      {items}
    </button>
  );
};

export default Categories;
