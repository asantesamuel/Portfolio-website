import React from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";

const HomeContainerTwo = () => {
  return (
    <>
      {" "}
      <Grid item xs sx={{ height: "100vh" }}>
        <Box>
          <Card>
            <CardMedia
              alt="Hulk "
              image="https://cdn.midjourney.com/7e7a7552-20f9-41e9-a010-938650141a60/0_3.webp"
              sx={{ height: 1000 }}></CardMedia>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default HomeContainerTwo;
