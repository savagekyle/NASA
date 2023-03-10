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
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "min(90%, 60rem)",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        maxHeight: "80%",
        overflowY: "auto",
      }}
    >
      <Typography variant="h1" sx={{ color: colors.teal[200] }}>
        Astronomy Picture of the Day
      </Typography>

      <Typography variant="h5">
        {apod.title} - <i>{apod.date}</i>
      </Typography>
      <img src={apod.url} alt="APOD" />
      <Typography variant="h4" sx={{}}>
        {apod.explanation}
      </Typography>
    </Box>
  );
};

export default Apod;
