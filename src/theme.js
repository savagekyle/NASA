import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark" && {
    dark: {
      100: "#cdcdce",
      200: "#9b9b9d",
      300: "#696a6b",
      400: "#37383a",
      500: "#050609",
      600: "#040507",
      700: "#030405",
      800: "#020204",
      900: "#010102",
    },
    darkBlue: {
      100: "#cfd1d5",
      200: "#9fa3aa",
      300: "#6f7480",
      400: "#3f4655",
      500: "#0f182b",
      600: "#0c1322",
      700: "#090e1a",
      800: "#060a11",
      900: "#030509",
    },
    blue: {
      100: "#d9e6f0",
      200: "#b4cde0",
      300: "#8eb5d1",
      400: "#699cc1",
      500: "#4383b2",
      600: "#36698e",
      700: "#284f6b",
      800: "#1b3447",
      900: "#0d1a24",
    },
    teal: {
      100: "#d0d7df",
      200: "#a2b0bf",
      300: "#73889e",
      400: "#45617e",
      500: "#16395e",
      600: "#122e4b",
      700: "#0d2238",
      800: "#091726",
      900: "#040b13",
    },
    lightBlue: {
      100: "#d0d7df",
      200: "#a2b0bf",
      300: "#73889e",
      400: "#45617e",
      500: "#16395e",
      600: "#122e4b",
      700: "#0d2238",
      800: "#091726",
      900: "#040b13",
    },
  }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark" && {
        // palette values for dark mode
        primary: {
          main: colors.darkBlue[500],
        },
        secondary: {
          main: colors.dark[300],
        },
        neutral: {
          dark: colors.teal[700],
          main: colors.teal[500],
          light: colors.teal[100],
        },
        background: {
          default: colors.dark[500],
        },
      }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
