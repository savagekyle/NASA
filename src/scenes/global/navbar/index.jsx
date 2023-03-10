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
        left: "6%",
        top: "6%",
      }}
    >
      <Link to="/images">
        <Typography variant="h6" color="white">
          NASA Images
        </Typography>
      </Link>
      <Link to="/quote">
        <Typography variant="h6" color="white">
          Quote
        </Typography>
      </Link>
      <Link to="/fact">
        <Typography variant="h6" color="white">
          Fact
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
