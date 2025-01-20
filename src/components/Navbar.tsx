import React, { useContext } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";
import { useTheme } from "@mui/material/styles";
import CustomIcon from "./CustomIcon";

const Navbar: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeContextProvider");
  }

  const { themeMode, toggleTheme } = themeContext;

  const theme = useTheme();

  const handleThemeToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    toggleTheme();
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        width: "100%",
        minWidth: "320px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomIcon
          onClick={handleThemeToggle}
          icon={themeMode === "light" ? <Brightness4 /> : <Brightness7 />}
          color="inherit"
          sx={{
            backgroundColor: theme.palette.background.default,
            "& svg": {
              fill: theme.palette.text.primary,
            },
            "&:hover": {
              backgroundColor: theme.palette.text.primary,
              transform: "scale(1.2)",
              "& svg": {
                fill: theme.palette.background.default,
              },
            },
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
