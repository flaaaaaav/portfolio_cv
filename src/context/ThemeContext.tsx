import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      background: {
        default: themeMode === "dark" ? "#3d3d3d" : "#fdfdfd",
      },
      text: {
        primary: themeMode === "dark" ? "#fdfdfd" : "#3d3d3d",
      },
    },
    typography: {
      fontFamily: '"Istok Web", sans-serif',
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
