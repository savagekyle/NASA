import React from "react";
import HttpClient from "../../HttpClient";
import { useState, useEffect } from "react";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

const Apod = () => {
  const [apod, setApod] = useState({});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
      console.log(apodData.data);
    });
  }, []);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          padding: "120px 0 60px",
          width: "min(90%, 800px)",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: colors.teal[200] }}>
          Astronomy Picture of the Day
        </Typography>

        <img src={apod.url} alt="APOD" width="100%" />
        <Typography variant="h5" sx={{ color: colors.lightBlue[200] }}>
          {apod.title} - <i>{apod.date}</i>
        </Typography>
        <Typography variant="h4" sx={{ color: colors.teal[100] }}>
          {apod.explanation}
        </Typography>
      </Box>
    </Box>
  );
};

export default Apod;
