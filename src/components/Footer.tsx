// Footer.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material"; // Puedes usar el ícono de GitHub o cualquier otro

const Footer: React.FC = () => {
  const theme = useTheme();

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
        2024 © Flavio Salas
      </Typography>
    </Box>
  );
};

export default Footer;
