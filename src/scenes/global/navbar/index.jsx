import { Box, Typography } from "@mui/material";
// import { tokens } from "../../../theme";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        zIndex: "1",
        gap: "2rem",
        left: "4%",
        top: "4%",
      }}
    >
      <Link to="/images">
        <Typography variant="h6" color="white">
          NASA Images
        </Typography>
      </Link>
      <Link to="/mars-weather">
        <Typography variant="h6" color="white">
          Mars Weather
        </Typography>
      </Link>
      <Link to="/apod">
        <Typography variant="h6" color="white">
          APOD
        </Typography>
      </Link>
    </Box>
  );
};

export default Navbar;
