import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#3d3d3d" : "#fdfdfd",
      },
      text: {
        primary: mode === "dark" ? "#fdfdfd" : "#3d3d3d",
      },
    },
    typography: {
      fontFamily: '"Istok Web", sans-serif',
    },
  });
