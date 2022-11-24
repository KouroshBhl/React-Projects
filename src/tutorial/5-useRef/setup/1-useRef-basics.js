import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef("");
  const formSubmitHandler = function (e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseRefBasics;
