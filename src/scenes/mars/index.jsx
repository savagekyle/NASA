import React from "react";
import HttpClient from "../../HttpClient";
import { useState, useEffect } from "react";
import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

const Mars = () => {
  const [weather, setWeather] = useState({});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    HttpClient.getWeather().then((weatherData) => {
      setWeather(weatherData.data);
      console.log(weatherData);
    });
  }, []);
  return <div>index</div>;
};

export default Mars;
