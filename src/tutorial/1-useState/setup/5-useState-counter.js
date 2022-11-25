import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const indreaseHandler = () => {
    setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
  };

  return (
    <>
      <div style={{ marginBottom: "4rem" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </div>

      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" onClick={indreaseHandler}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
