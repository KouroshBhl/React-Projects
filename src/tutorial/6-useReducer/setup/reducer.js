export const reducer = function (state, action) {
  if (action.type === "ADD_ITEM") {
    const newPerson = [...state.people, action.payload];
    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: "Item Added!",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please Enter a value...!",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const removedPerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: removedPerson,
      isModalOpen: true,
      modalContent: "Item Removed!",
    };
  }

  throw new Error("Non matching type!");
  // return state;
};

//! Initialize object
export const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello world",
};
