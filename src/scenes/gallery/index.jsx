import React from "react";
import HttpClient from "../../HttpClient";
import { useState, useEffect } from "react";
import { tokens } from "../../theme";
import { Typography, useTheme, Box, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {
  const [image, setImage] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const itemData = [
    {
      id: "PIA18033",
      title: "Earth",
      cols: 2,
      rows: 2,
      url: "https://images.nasa.gov/details/PIA18033",
    },
    {
      id: "PIA12348",
      title: "Great Observatories Unique Views of the Milky Way",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA12348",
    },
    {
      id: "PIA15985",
      title: "Hubble Captures View of Mystic Mountain",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA15985",
    },
    {
      id: "behemoth-black-hole-found-in-an-unlikely-place_26209716511_o",
      title: "Behemoth Black Hole Found in an Unlikely Place",
      cols: 1,
      rows: 2,
      url: "https://images.nasa.gov/details/behemoth-black-hole-found-in-an-unlikely-place_26209716511_o",
    },
    {
      id: "hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o",
      title: "Hubble Captures Vivid Auroras in Jupiter’s Atmosphere",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o",
    },
    {
      id: "PIA17563",
      title: "Crab Nebula, as Seen by Herschel and Hubble",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA17563",
    },
    {
      id: "PIA09178",
      title: "Comets Kick up Dust in Helix Nebula",
      cols: 1,
      rows: 2,
      url: "https://images.nasa.gov/details/PIA09178",
    },
    {
      id: "PIA03654",
      title: "A Cauldron of Stars at the Galaxy Center",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA03654",
    },
    {
      id: "PIA21390",
      title: "Approaching Jupiter",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA21390",
    },
    {
      id: "PIA09113",
      title: "Pluto Colorful Composition",
      cols: 2,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA09113",
    },
    {
      id: "GSFC_20171208_Archive_e001925",
      title: "The Two-faced Whirlpool Galaxy",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/GSFC_20171208_Archive_e001925",
    },
    {
      id: "PIA20498",
      title: "Barely Bisected Rings",
      cols: 2,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA20498",
    },
    {
      id: "PIA19821",
      title: "NuSTAR Stares at the Sun",
      cols: 1,
      rows: 1,
      url: "https://images.nasa.gov/details/PIA19821",
    },
  ];

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = itemData.map((item) =>
        HttpClient.getImages(item.id).then(
          (imgData) => imgData.data.collection.items[0].href
        )
      );
      const imageUrls = await Promise.all(imagePromises);
      setImage(imageUrls);
    };
    fetchImages();
  });

  return (
    <Box paddingBottom="40px">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "120px 0 60px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ paddingBottom: "10px", color: colors.teal[200] }}
        >
          NASA Image Gallery
        </Typography>
        <Typography variant="h6">
          A collection of some of my favorite NASA images.
        </Typography>
        <Typography variant="h6">
          <Link to="https://images.nasa.gov/">
            View NASA's Full Image and Video Library
          </Link>
        </Typography>
      </Box>
      <ImageList
        sx={{
          width: isSmallScreen ? "90%" : "1500px",
          height: isSmallScreen ? "auto" : "1550px",
          marginInline: "auto",
          display: isSmallScreen && "flex",
          flexDirection: isSmallScreen && "column",
        }}
        variant="quilted"
        cols={isSmallScreen ? 1 : 4} // Update cols prop based on screen size
        rowHeight={300}
      >
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.id}
            cols={item.cols}
            rows={item.rows}
            {...srcset(image[index], 300 * item.cols, 300 * item.rows)}
          >
            <img loading="lazy" src={image[index]} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <Link to={item.url}>
                  <IconButton
                    sx={{ color: colors.teal[100] }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                </Link>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
