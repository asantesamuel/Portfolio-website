import React from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";
import ProfilePicture from "../assets/profile.jpg";

const HomeContainerTwo = () => {
  return (
    <>
      {" "}
      <Grid item xs sx={{ marginTop: 5 }}>
        <Box>
          <Card>
            <CardMedia
              alt="Hulk "
              src={ProfilePicture}
              sx={{
                height: 950,
                objectFit: "cover",
                width: "100%",

                position: "absolute",
                top: 0,
                left: 0,
              }}
              style={{}}></CardMedia>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default HomeContainerTwo;
