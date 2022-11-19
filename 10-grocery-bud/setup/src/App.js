import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = function () {
  const getItem = localStorage.getItem("data");
  if (!getItem) return [];

  return JSON.parse(getItem);
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const submitFormHandler = function (e) {
    e.preventDefault();
    setIsEditing(false);
    if (!isEditing) {
      setList((prevList) => [...prevList, inputValue]);
      alertSetup(true, "Item Added", "success");
    }

    if (isEditing) {
      const editEl = list.findIndex((li) => li === edit);
      list[editEl] = inputValue;
      alertSetup(true, "Item Edited!", "success");
    }

    setInputValue("");
  };

  const deleteBtnHandler = function (data) {
    setList(list.filter((el) => el !== data));
    alertSetup(true, "Item Deleted!", "danger");
  };

  const editBtnHandler = function (data) {
    setIsEditing(true);
    setInputValue(data);
    setEdit(data);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const timer = setTimeout(() => {
      alertSetup();
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  const alertSetup = function (show = false, msg = "", type = "") {
    setAlert({ show, msg, type });
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitFormHandler}>
        {alert.type && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            placeholder="e.g. eggs"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></input>
          <button className="submit-btn" type="submit">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <div className="grocery-list">
            {list.map((li, index) => (
              <List
                key={index}
                data={li}
                deleteBtnHandler={deleteBtnHandler}
                editBtnHandler={editBtnHandler}
              />
            ))}
          </div>
          <button
            className="clear-btn"
            onClick={() => {
              setList([]);
              alertSetup(true, "All Items Cleared!", "danger");
            }}
          >
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
