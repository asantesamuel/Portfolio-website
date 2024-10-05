import React from "react";
import { Box, Typography, Paper, useScrollTrigger, Zoom } from "@mui/material";

function ScrollableComponent() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

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
        sx={{ height: "72vh", overflow: "auto", width: 550 }}>
        {/* Your content here */}
        <Typography
          variant="body1"
          sx={{
            padding: 2,
            textAlign: "left",
            fontSize: 20,
          }}></Typography>
        {/* More content... */}
      </Paper>
      <Zoom in={trigger}>
        <Typography variant="subtitle1" color="primary">
          Scroll to top
        </Typography>
      </Zoom>
    </Box>
  );
}
export default ScrollableComponent;
