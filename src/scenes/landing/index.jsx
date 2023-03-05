import { Box, Button } from "@mui/material";
import Video from "../../assets/earth.mp4";
import Audio from "../../audio/interstellar.mp3";
// import { Link } from "react-router-dom";

const index = () => {
  return (
    <Box position="absolute" width="100%" height="100vh">
      <video
        src={Video}
        type="video/mp4"
        autoPlay
        loop
        muted
        id="background-video"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: {
            xs: "50%",
            md: "5%",
          },
          transform: {
            xs: "translate(-50%, -50%)",
            md: "translateY(-50%)",
          },
          textAlign: "center",
          color: "#fff",
          fontSize: {
            xs: "30px",
            lg: "40px",
          },
          maxWidth: {
            xs: "300px",
            xl: "500px",
          },
        }}
      >
        <p style={{ fontStyle: "italic", margin: "0" }}>
          "I didn't feel like a giant. I felt very, very small"
        </p>
        <p style={{ fontSize: "20px" }}>- Neil Armstrong</p>

        <Button
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            color: "#fff",
            backgroundColor: "rgba(22, 57, 94, .5)",
          }}
        >
          Picture of the day
        </Button>
      </Box>
      <Box position="absolute" bottom="0" margin="20px" right="0">
        <audio controls>
          <source src={Audio} type="audio/mpeg" />
          Your browswer does not support the audio
        </audio>
      </Box>
    </Box>
  );
};

export default index;
