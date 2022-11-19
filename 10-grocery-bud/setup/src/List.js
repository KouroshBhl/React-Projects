import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ data, deleteBtnHandler, editBtnHandler }) => {
  return (
    <article className="grocery-item">
      <p className="title">{data}</p>
      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => editBtnHandler(data)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => deleteBtnHandler(data)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
