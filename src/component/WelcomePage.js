import React from "react";
import { Box } from "@mui/material";
import videoFile from "../assets/Designer building website.mp4";

const WelcomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 2000,
          width: "100vw",

          marginTop: 50,
          overflow: "hidden",
        }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={videoFile}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <h1>I am Junior Software Engineer </h1>
      </Box>
    </>
  );
};

export default WelcomePage;
