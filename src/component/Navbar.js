import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {" "}
      <AppBar sx={{ height: 50 }} position="fixed" color="inherit">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "gray", fontSize: 14 }}>
            Samuel Boakye Asante
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "gray" }}></Typography>
          <Stack direction="row" spacing={8}>
            <Link to="/">
              <Button sx={{ color: "gray" }}>Home</Button>
            </Link>
            <Link to="/about-me" color="inherit">
              <Button sx={{ color: "gray" }}>About</Button>
            </Link>
            <Link to="/experience">
              <Button sx={{ color: "gray" }}>Experience</Button>
            </Link>
            <Link to="/Blog">
              <Button sx={{ color: "gray" }}>Blogs</Button>
            </Link>
            <Link to="/contact-me">
              <Button sx={{ color: "gray" }}>Contact Us</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
