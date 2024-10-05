import React from "react";
import { Typography, Box } from "@mui/material";
const Footer = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        Samuel Asante {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <>
      {" "}
      <Box
        sx={{
          // bgcolor: "background.paper",
          paddingLeft: 10,
          paddingRight: 10,

          // position: "fixed",
          display: "flex",
        }}
        component="footer">
        <Copyright />
      </Box>
    </>
  );
};

export default Footer;
