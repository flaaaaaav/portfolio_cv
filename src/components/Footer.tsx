// Footer.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        mb: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center" }}
      >
         {currentYear} © Flavio Salas.
      </Typography>
    </Box>
  );
};

export default Footer;
