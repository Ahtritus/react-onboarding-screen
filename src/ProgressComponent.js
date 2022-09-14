import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const steps = ["1", "2", "3", "4"];
const theme = createTheme({
  palette: {
    primary: {
      main: "#664de5",
    },
  },
  typography: { fontSize: 20 },
});

function ProgressComponent(props) {
  return (
    <div className="centreDiv">
      <ThemeProvider theme={theme}>
        <Box
          sx={{ width: "400px", paddingTop: "30px", paddingBottom: "100px" }}
        >
          <Stepper
            activeStep={props.activeStep}
            alternativeLabel
            sx={{ color: "primary" }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ProgressComponent;
