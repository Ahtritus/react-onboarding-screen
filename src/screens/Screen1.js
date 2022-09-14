import { FormControl, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function Screen1() {
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
            Welcome! First things first...
          </Typography>
          <Typography variant="h6" component="h6">
            You can always change them later.
          </Typography>
        </Typography>
        <FormControl>
          <TextField
            placeholder="Steve Jobs"
            label={"First Name"}
            id="full-name"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            style={{ width: 400 }}
          />
          <TextField
            placeholder="Steve"
            label={"Display Name"}
            id="display-name"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            style={{ width: 400 }}
          />
        </FormControl>
      </Grid>
    </div>
  );
}

export default Screen1;
