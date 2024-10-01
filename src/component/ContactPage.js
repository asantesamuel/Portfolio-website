import React from "react";
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
      <Grid container justifyContent={"center"}>
        <Grid Item>
          {" "}
          <Grid
            container
            padding={3}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              height: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {" "}
            <Grid item>
              <Typography textAlign={"left"} variant="h6">
                Heyyy, send me a message
              </Typography>
            </Grid>
            <Grid
              item
              marginRight={10}
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
                  color="success"></TextField>
              </Stack>
            </Grid>
            <Grid item marginTop={3} marginLeft={15}>
              <Button variant="contained" color="success">
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            id="ContactPage"
            display="flex"
            sx={{
              height: 1000,
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
    </>
  );
};

export default ContactPage;
