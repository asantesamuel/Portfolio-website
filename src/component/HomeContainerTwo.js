import React from "react";
import { Box, Grid, Avatar } from "@mui/material";
const HomeContainerTwo = () => {
  return (
    <>
      {" "}
      <Grid item xs>
        <Box>
          <Avatar
            variant="square"
            alt="pic-profile"
            src="https://source.unsplash.com/random?wallpapers"
            position={"fixed"}
            sx={{
              height: "100vh",
              width: 700,
              color: "success.light",
            }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default HomeContainerTwo;
