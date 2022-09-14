import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#664de5",
    },
  },
});

function ButtonComponent(props) {
  return (
    <div className="centreDiv">
      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: 400, padding: 1 }}
          onClick={() => props.stepChanger(props.step + 1)}
        >
          {props.step < 3 ? "Create Workspace" : "Launch Eden"}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default ButtonComponent;
