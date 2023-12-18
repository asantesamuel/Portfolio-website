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
            sx={{ flexGrow: 1 }}></Typography>
          <Stack direction="row" spacing={8}>
            <Link to="/">
              <Button color="success">Home</Button>
            </Link>
            <Link to="/about-me" color="inherit">
              <Button color="success">About</Button>
            </Link>
            <Link to="/experience">
              <Button color="success">Experience</Button>
            </Link>
            <Link to="/contact-me">
              <Button color="success">Contact Us</Button>
            </Link>
            <Link to="/blog">
              <Button color="success">Blog</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
