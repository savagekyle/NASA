import Landing from "./scenes/landing";
import { Routes, Route } from "react-router-dom";
import Navbar from "./scenes/global/navbar/index";
import Apod from "./scenes/apod";
import Gallery from "./scenes/gallery";
import Mars from "./scenes/mars";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/apod" element={<Apod />} />
            <Route path="/images" element={<Gallery />} />
            <Route path="/mars-weather" element={<Mars />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
