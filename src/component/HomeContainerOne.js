import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import ScrollableComponent from "./Scrollable";

const HomeContainerOne = () => {
  return (
    <>
      {" "}
      <Grid item xs sx={{}}>
        <Box justifyContent="center" alightItems="center" sx={{}}>
          <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item>
              {" "}
              <Typography
                variant="h1"
                marginTop={5}
                sx={{
                  fontSize: 70,
                  fontWeight: 700,
                  paddingLeft: 5.5,
                  paddingTop: 2,

                  textAlign: "left",
                }}>
                Samuel
              </Typography>
              <Typography
                variant="h4"
                fontWeight={500}
                sx={{
                  paddingLeft: 6,
                  paddingBottom: 2,
                  textAlign: "left",
                  fontSize: 17,
                }}>
                Jnr. Software Developer
              </Typography>
              <ScrollableComponent />
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default HomeContainerOne;
