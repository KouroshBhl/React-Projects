import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";
import { reducer, defaultState } from "./reducer";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitFormHandler = function (e) {
    e.preventDefault();
    if (!name) return dispatch({ type: "NO_VALUE" });

    const newPerson = { id: new Date().getTime().toString(), name };
    dispatch({ type: "ADD_ITEM", payload: newPerson });
    setName("");
  };

  const closeModalTimeout = function () {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal
          messageContent={state.modalContent}
          closeModalTimeout={closeModalTimeout}
        />
      )}
      <form className="form" onSubmit={submitFormHandler}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>

      {state.people.map((person) => (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: person.id })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default Index;
