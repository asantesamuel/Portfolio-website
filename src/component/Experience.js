import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// const cards = [1, 2, 3, 4];

const defaultTheme = createTheme();

export default function Album() {
  let original_data = [
    {
      title: "Cat",
      image:
        "https://cdn.midjourney.com/bfb05879-0ac1-4eff-981e-8ccfa55312e6/0_3.webp",
    },
    {
      title: "Dog",
      image:
        "https://cdn.midjourney.com/515f96f6-ed27-436c-a125-f6894976907a/0_3.webp",
    },
    {
      title: "Spiderman",
      image:
        "https://cdn.midjourney.com/6f195c51-d78a-4252-969f-50176b8a10e5/0_2.webp",
    },
    {
      title: "Incredible Hulk",
      image:
        "https://cdn.midjourney.com/7e7a7552-20f9-41e9-a010-938650141a60/0_3.webp",
    },
    {
      title: "Zombie",
      image:
        "https://cdn.midjourney.com/2c6fdcbf-7833-4bd3-9a50-ddac5febf4bc/0_1.webp",
    },
    {
      title: "Tarzan",
      image:
        "https://cdn.midjourney.com/87fda811-61ca-463b-a115-26dd9def36ad/0_3.webp",
    },
  ];

  const [data, setData] = useState(original_data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let data_rev = original_data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setData(data_rev);
  }, [search]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Grid container spacing={2} marginTop={4}>
          <Grid item xs={6}>
            <div style={{ textAlign: "center", margin: "2%" }}>
              <Grid container spacing={2}>
                {data.map((item) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <Card>
                        <CardMedia
                          sx={{
                            height: { lg: 360, md: 500, sm: 700, xs: 360 },
                          }}
                          image={item.image}></CardMedia>
                      </Card>
                      <h4>{item.title}</h4>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Grid>

          <Grid item xs={6} marginTop={3}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  width: 850,
                  height: 900,
                },
              }}>
              <Paper elevation={3} />
            </Box>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
