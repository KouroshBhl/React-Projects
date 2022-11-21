import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const CreateAppContext = function ({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const names = "kourosh";
  return (
    <AppContext.Provider
      value={{ setShowModal, showModal, names, setShowMenu, showMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { CreateAppContext, AppContext };
