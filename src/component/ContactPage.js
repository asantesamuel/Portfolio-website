import React from "react";
import Footer from "./Footer";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
const ContactPage = () => {
  return (
    <>
      <Grid
        height={900}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h1"
          sx={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            color: "green",
          }}>
          Let's Connect
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid Item>
            {" "}
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {" "}
              <Grid
                items
                display="flex"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {" "}
                <Stack
                  direction={"column"}
                  spacing={3.5}
                  sx={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "start",
                    justifyContent: "center",
                  }}>
                  {" "}
                  <TextField
                    label="Name"
                    variant="standard"
                    color="success"></TextField>
                  <TextField
                    label="Email"
                    variant="standard"
                    color="success"></TextField>
                  <TextField
                    label="Message"
                    variant="standard"
                    color="success"
                    sx={{}}></TextField>
                  <Button variant="contained" color="success">
                    Send
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              id="ContactPage"
              display="flex"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Box>
                <Paper
                  sx={{
                    padding: 5,
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Stack
                    direction={"column"}
                    spacing={3.5}
                    sx={{
                      display: "flex",
                      height: "100%",
                      width: "100%",
                      alignItems: "start",
                      justifyContent: "center",
                    }}>
                    <Typography variant="h5">Phone</Typography>
                    <Typography variant="h5">Email</Typography>
                    <Typography variant="h5">Location</Typography>
                  </Stack>

                  <Stack
                    direction={"column"}
                    spacing={5}
                    sx={{
                      display: "flex",
                      height: "100%",
                      width: "100%",
                      alignItems: "start",
                      justifyContent: "center",
                    }}>
                    <Typography variant="h9">+233 50 382 3710</Typography>
                    <Typography variant="h9">
                      asanteboakyesamuel@gmail.com
                    </Typography>
                    <Typography variant="h9">Tema, Greater Accra</Typography>
                  </Stack>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default ContactPage;
