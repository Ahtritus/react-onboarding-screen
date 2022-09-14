import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CardComponent from "./CardComponent";

function Screen3() {
  const [activeCard, setActiveCard] = useState();

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
            How are you planning to use Eden?
          </Typography>
          <Typography variant="h6" component="h6">
            We'll streamline your setup experience accordingly.
          </Typography>
        </Typography>
        <div className="row" style={{ "white-space": "nowrap" }}>
          <CardComponent
            activeCard={activeCard}
            activeCardChanger={setActiveCard}
            title="For myself"
            subtitle="Write better. think more clearly. Stay organized."
          />
          <CardComponent
            activeCard={activeCard}
            activeCardChanger={setActiveCard}
            title="With my team"
            subtitle="Wikis, docs, tasks & projects, all in one place"
          />
        </div>
      </Grid>
    </div>
  );
}

export default Screen3;
