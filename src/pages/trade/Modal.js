import React from "react";

const darkBGModal = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: "100vw",
  height: "100vh",
  zIndex: "9001",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
};

const centered = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "green",
  width: "50em",
  height: "50em",
  zIndex: "9002",
};

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div style={darkBGModal} onClick={() => setIsOpen(false)} />
      <div style={centered}> test</div>
    </>
  );
};

export default Modal;
