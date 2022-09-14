import {
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Screen2() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography align="center" sx={{ paddingBottom: "50px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Let's set up a home for all your work
          </Typography>
          <Typography variant="h6" component="h6">
            You can always create another workspace later.
          </Typography>
        </Typography>
        <FormControl>
          <TextField
            placeholder="Eden"
            label={"Workspace Name"}
            id="workspace-name"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            style={{ width: 400 }}
          />
          <TextField
            placeholder="Example"
            label={"Workspace URL (optional)"}
            id="workspace-url"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            style={{ width: 400 }}
            InputProps={{
              startAdornment: (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "#f8f9fc",
                    border: "0.5px solid #e6e6e6",
                    height: 55,
                    width: 120,
                    marginLeft: -13,
                    marginRight: 13,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <InputAdornment position="start">
                    www.eden.com/
                  </InputAdornment>
                </div>
              ),
            }}
          />
        </FormControl>
      </Grid>
    </div>
  );
}

export default Screen2;
