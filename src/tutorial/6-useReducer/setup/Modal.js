import React, { useEffect } from "react";

const Modal = ({ messageContent, closeModalTimeout }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModalTimeout();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{messageContent}</p>
    </div>
  );
};

export default Modal;
