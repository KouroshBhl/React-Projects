import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color, index }) => {
  const showColor = rgbToHex(...color.rgb); //color.rgb[0], color.rgb[1], color.rgb[2]
  const [alert, setAlert] = useState(false);
  const copyHandler = function () {
    navigator.clipboard.writeText(showColor);
    setAlert(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${color.rgb.join(",")})` }}
      onClick={copyHandler}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{showColor}</p>
      {alert && <p>Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
