import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { setShowModal, setShowMenu } = useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <FaBars />
      </button>

      <button className="btn" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
