import React from "react";
import { Grid, Typography, Button } from "@mui/material";
const HomeContainerThree = () => {
  return (
    <>
      {" "}
      <Grid item xs>
        <Grid container justifyContent={"center"} alignContent={"center"}>
          <Grid Item marginTop={60} marginLeft={10}>
            <Typography variant="h1">Frontend Developer</Typography>
            <Button
              sx={{ marginLeft: 40, marginTop: 10 }}
              variant="contained"
              color="success">
              About Me
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeContainerThree;
