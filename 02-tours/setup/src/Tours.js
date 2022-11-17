import React from "react";
import Tour from "./Tour";
const Tours = ({ data, removeTours }) => {
  return (
    <div>
      <Tour data={data} removeTours={removeTours} />
    </div>
  );
};

export default Tours;
