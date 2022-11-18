import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ data }) => {
  const [desc, setDesc] = useState(false);
  const btnHandler = function () {
    setDesc((prevDesc) => !prevDesc);
  };

  return (
    <>
      {
        <article className="question" key={data.id}>
          <header>
            <h4>{data.title}</h4>
            <button className="btn" onClick={() => btnHandler()}>
              {!desc ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
          </header>
          {desc && <p>{data.info}</p>}
        </article>
      }
    </>
  );
};

export default Question;
