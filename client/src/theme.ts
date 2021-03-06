import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFEFB",
    },

    background: {
      default: "white",
    },
  },

  typography: {
    fontFamily: ["Roboto"].join(","),

    body1: {
      color: "black",
    },
  },
});

export const lightTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      height: 64,
    },

    footer: {
      height: 41,

      color: "#FFFEFB",
    },

    drawer: {
      width: 240,
    },

    transitions: {
      duration: {
        slow: 600,
      },
    },
  },

  shadows: [
    ...theme.shadows,

    "0 0 2em 0px rgba(0, 0, 0, 0.4)",

    "0 0 0 1px #ddd",
  ],

  transitions: {
    easeMe: "all 0.2s ease-out",
  },
});

export default lightTheme;
