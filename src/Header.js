import { Typography } from "@mui/material";
import React from "react";
import icon from "./assets/eden_logo.png";

function Header() {
  return (
    <div className="centreDiv">
      <img
        src={icon}
        alt="Eden Icon"
        style={{
          width: "35px",
          height: "40px",
          paddingRight: "10px",
        }}
      />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Eden
      </Typography>
    </div>
  );
}

export default Header;
