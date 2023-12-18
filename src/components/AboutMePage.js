import React from "react";
import {
  Stack,
  Typography,
  Box,
  Avatar,
  // Paper,

  // TextField,
} from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import SchoolIcon from "@mui/icons-material/School";

const AboutMePage = () => {
  return (
    <>
      <section id="About">
        <Box
          display="flex"
          position={"relative"}
          justifyContent={"left"}
          alignItems={"center"}
          sx={{ height: 1000 }}>
          <Avatar
            top={10}
            marginTop={10}
            variant="square"
            sx={{ display: "block", width: 700, height: 900 }}
            alt="About-Me"
            src="https://source.unsplash.com/random?wallpapers"
            position={"fixed"}
          />

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
            <Stack direction={"row"} display={"block"}>
              {" "}
              {/* <LinkedInIcon fontSize="50" />
              <GitHubIcon fontSize="50" />
              <TwitterIcon fontSize="50" /> */}
            </Stack>
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
                {/* <SchoolIcon /> */}
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
