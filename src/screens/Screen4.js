import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";
import React from "react";

function Screen4(props) {
  return (
    <div className="row">
      <div className="centreDiv">
        <CheckCircleIcon
          sx={{
            fontSize: 60,
            color: "#664de5",
            marginTop: "-50px",
            marginBottom: "50px",
          }}
        />
      </div>
      <Typography align="center" sx={{ paddingBottom: "50px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Congratulations, {props.displayName}!
        </Typography>
        <Typography variant="h6" component="h6">
          You have completed onboarding, you can start using Eden!
        </Typography>
      </Typography>
    </div>
  );
}

export default Screen4;
