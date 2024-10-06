import React from "react";
import { Box, Grid } from "@mui/material";
import "./Home.css";
import "../App.css";
import HomeContainerOne from "./HomeContainerOne";
import HomeContainerTwo from "./HomeContainerTwo";
import HomeContainerThree from "./HomeContainerThree";
import WelcomePage from "./WelcomePage";

const Home = () => {
  return (
    <>
      <Box
        id="ContactPage"
        display="flex"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Grid
          container
          justifyContent="center"
          sx={{
            display: "flex",
          }}>
          <WelcomePage />
          <HomeContainerOne sx={{ flex: 1 }} />

          <HomeContainerTwo sx={{ flex: 1 }} />

          <HomeContainerThree sx={{ flex: 1 }} />
        </Grid>
      </Box>
    </>
  );
};

export default Home;
