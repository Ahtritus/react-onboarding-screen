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

const divStyle = {
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function ButtonComponent(props) {
  return (
    <div style={divStyle}>
      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: 400, padding: 1 }}
        >
          {props.text}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default ButtonComponent;
