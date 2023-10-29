import React from "react";

const Buttons = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="left-btn">
      {text}
    </button>
  );
};

export default Buttons;
