import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "./Footer";

const HomeContainerOne = () => {
  return (
    <>
      {" "}
      <Grid item xs>
        <Box
          justifyContent="center"
          alightItems="center"
          sx={{ height: "100vh" }}>
          <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item marginTop={25}>
              {" "}
              <Box sx={{ textTransform: "capitalize" }}>
                <Typography variant="h1" sx={{ fontSize: 140 }}>
                  Samuel
                </Typography>
              </Box>
            </Grid>
            <Grid item marginTop={30} marginLeft={0}>
              {" "}
              <Box width={460}>
                <Typography variant="h10" sx={{ lineHeight: 1, fontSize: 15 }}>
                  &#8208; Passionate and driven individual with a fervent
                  commitment to promoting technology adoption among people,
                  aiming to alleviate financial hardships and poverty.
                  <br />
                  <br /> &#8208; Proficient leader adept at fostering
                  collaboration among diverse individuals for assignments
                  nevertheless I am an active team contributor, open to idea
                  exchange for creating software solutions to practical
                  problems.
                  <br />
                  <br />
                  &#8208;Enthusiastic about data science analytics and software
                  engineering, and looking forward to pursuing a major in these
                  fields.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Box>
      </Grid>
    </>
  );
};

export default HomeContainerOne;
