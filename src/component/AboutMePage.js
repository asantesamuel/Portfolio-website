import React from "react";
import { Stack, Typography, Box, Card, CardMedia } from "@mui/material";

const AboutMePage = () => {
  return (
    <>
      <section id="About">
        <Box
          display="flex"
          position={"relative"}
          justifyContent={"left"}
          alignItems={"center"}
          sx={{ padding: 5 }}>
          <Card>
            <CardMedia
              alt="Remy Sharp"
              image="https://cdn.midjourney.com/7e7a7552-20f9-41e9-a010-938650141a60/0_3.webp"
              sx={{
                width: 600,
                height: 900,
              }}></CardMedia>
          </Card>
          <Typography
            top={10}
            aria-setsize={500}
            variant="h6"
            component="div"
            fontSize={50}
            sx={{ flexGrow: 1 }}
            align="center"
            padding={5}
            display={"block"}
            justifyContent={"center"}
            alignItems={"center"}>
            Samuel Asante Boakye
            <br />
            FRONTEND DEVELOPER
            <Stack direction={"row"} display={"block"}></Stack>
            <Stack direction={"row"} spacing={4}>
              <Box
                align="left"
                sx={{
                  maxWidth: 550,
                  fontSize: 30,
                }}>
                Personally
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  nec suscipit orci. Ut sed suscipit felis. Pellentesque gravida
                  quis massa at mattis. Aliquam ac blandit tortor, a congue mi.
                  Praesent sagittis, augue et ullamcorper mattis, ante nisi
                  eleifend mauris, sit amet vulputate turpis justo ut turpis.
                </Typography>
              </Box>
              <Box
                align="left"
                sx={{
                  maxWidth: 550,
                  fontSize: 30,
                }}>
                Education
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  nec suscipit orci. Ut sed suscipit felis. Pellentesque gravida
                  quis massa at mattis. Aliquam ac blandit tortor, a congue mi.
                  Praesent sagittis, augue et ullamcorper mattis, ante nisi
                  eleifend mauris, sit amet vulputate
                </Typography>
              </Box>
            </Stack>
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default AboutMePage;
