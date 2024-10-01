import React from "react";
import { Box, Grid } from "@mui/material";
import "./Home.css";
import "../App.css";
import HomeContainerOne from "./HomeContainerOne";
import HomeContainerTwo from "./HomeContainerTwo";
import HomeContainerThree from "./HomeContainerThree";

const Home = () => {
  return (
    <>
      <Box
        id="ContactPage"
        display="flex"
        sx={{
          height: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Grid container justifyContent="center">
          <HomeContainerOne />

          <HomeContainerTwo />

          <HomeContainerThree />
        </Grid>
      </Box>
    </>
  );
};

export default Home;
