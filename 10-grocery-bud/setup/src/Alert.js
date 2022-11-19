import React, { useEffect } from "react";

const Alert = ({ type, msg }) => {
  console.log(msg);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
