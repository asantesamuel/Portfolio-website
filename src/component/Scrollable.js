import React, { useState } from "react";
import { Box, Typography, Paper, useScrollTrigger, Zoom } from "@mui/material";
import "./Home.css"

function ScrollableComponent() {
  const [hovered, setHovered] = useState(false);
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleMouseEnter = () => {
    setHovered(true);
    console.log("Mouse Entered");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    console.log("Mouse Left");
  };
  console.log("Hovered:", hovered);
  console.log("Trigger:", trigger);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: 600,
        marginLeft: 2,
        marginRight: 1,
      }}>
      <Paper
        elevation={0}
        marginTop={5}
        sx={{
          height: "72vh",
          overflow: hovered ? "auto" : "hidden",
          width: 550,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {/* Your content here */}
        <Box
          variant="body1"
          sx={{
            padding: 2,
            textAlign: "left",
            fontSize: 20,
          }}>
          <Box sx={{ display: "flex", marginBottom: 12 }}>
            <Typography
              sx={{
                height: 50,

                alignContent: "center",

                fontWeight: 700,
                fontSize: 14,
              }}>
              DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                height: 50,
                fontSize: 12,
                alignContent: "center",
                padding: 2,
              }}>
              Partnered Expertise: Harness the collective knowledge of a
              developer dedicated to your project's success. End-to-End
              Solutions: From conceptualization to execution, experience a
              holistic approach to development. Innovative Mindset: Infuse
              creativity and fresh perspectives into your projects for unmatched
              outcomes. Embrace the journey of collaborative development and
              witness your visions evolve into impactful solutions
            </Typography>
          </Box>
          <hr></hr>

          <Box sx={{ display: "flex", marginBottom: 12 }}>
            <Typography
              sx={{
                height: 50,

                alignContent: "center",

                fontWeight: 700,
                fontSize: 14,
              }}>
              DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                height: 50,
                fontSize: 12,
                alignContent: "center",
                padding: 2,
              }}>
              Partnered Expertise: Harness the collective knowledge of a
              developer dedicated to your project's success. End-to-End
              Solutions: From conceptualization to execution, experience a
              holistic approach to development. Innovative Mindset: Infuse
              creativity and fresh perspectives into your projects for unmatched
              outcomes. Embrace the journey of collaborative development and
              witness your visions evolve into impactful solutions
            </Typography>
          </Box>
          <hr></hr>

          <Box sx={{ display: "flex", marginBottom: 12 }}>
            <Typography
              sx={{
                height: 50,

                alignContent: "center",

                fontWeight: 700,
                fontSize: 14,
              }}>
              DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                height: 50,
                fontSize: 12,
                alignContent: "center",
                padding: 2,
              }}>
              Partnered Expertise: Harness the collective knowledge of a
              developer dedicated to your project's success. End-to-End
              Solutions: From conceptualization to execution, experience a
              holistic approach to development. Innovative Mindset: Infuse
              creativity and fresh perspectives into your projects for unmatched
              outcomes. Embrace the journey of collaborative development and
              witness your visions evolve into impactful solutions
            </Typography>
          </Box>
          <hr></hr>

          <Box sx={{ display: "flex", marginBottom: 12 }}>
            <Typography
              sx={{
                height: 50,

                alignContent: "center",

                fontWeight: 700,
                fontSize: 14,
              }}>
              DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                height: 50,
                fontSize: 12,
                alignContent: "center",
                padding: 2,
              }}>
              Partnered Expertise: Harness the collective knowledge of a
              developer dedicated to your project's success. End-to-End
              Solutions: From conceptualization to execution, experience a
              holistic approach to development. Innovative Mindset: Infuse
              creativity and fresh perspectives into your projects for unmatched
              outcomes. Embrace the journey of collaborative development and
              witness your visions evolve into impactful solutions
            </Typography>
          </Box>
          <hr></hr>

          <Box sx={{ display: "flex", marginBottom: 12 }}>
            <Typography
              sx={{
                height: 50,

                alignContent: "center",

                fontWeight: 700,
                fontSize: 14,
              }}>
              DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                height: 50,
                fontSize: 12,
                alignContent: "center",
                padding: 2,
              }}>
              Partnered Expertise: Harness the collective knowledge of a
              developer dedicated to your project's success. End-to-End
              Solutions: From conceptualization to execution, experience a
              holistic approach to development. Innovative Mindset: Infuse
              creativity and fresh perspectives into your projects for unmatched
              outcomes. Embrace the journey of collaborative development and
              witness your visions evolve into impactful solutions
            </Typography>
          </Box>
          <hr></hr>

          <Box sx={{ display: "flex", marginBottom: 12 }}>
            <Typography
              sx={{
                height: 50,

                alignContent: "center",

                fontWeight: 700,
                fontSize: 14,
              }}>
              DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                height: 50,
                fontSize: 12,
                alignContent: "center",
                padding: 2,
              }}>
              Partnered Expertise: Harness the collective knowledge of a
              developer dedicated to your project's success. End-to-End
              Solutions: From conceptualization to execution, experience a
              holistic approach to development. Innovative Mindset: Infuse
              creativity and fresh perspectives into your projects for unmatched
              outcomes. Embrace the journey of collaborative development and
              witness your visions evolve into impactful solutions
            </Typography>
          </Box>
          <hr></hr>
        </Box>

        {/* More content... */}
      </Paper>
      {hovered && trigger && (
        <Zoom in={trigger}>
          <Typography variant="subtitle1" color="primary">
            Scroll to top
          </Typography>
        </Zoom>
      )}
    </Box>
  );
}
export default ScrollableComponent;
