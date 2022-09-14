import React from "react";
import icon from "./assets/eden_logo.png";

const divStyle = {
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Header() {
  return (
    <div style={divStyle}>
      <img
        src={icon}
        alt="Eden Icon"
        style={{
          width: "35px",
          height: "40px",
          paddingRight: "10px",
        }}
      />
      <h1>Eden</h1>
    </div>
  );
}

export default Header;
