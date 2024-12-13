import React from "react";
import { Box, Typography } from "@mui/material";
import { FaGithub, FaFigma, FaEnvelope, FaFileAlt } from "react-icons/fa"; // Importación de íconos
import { useTheme } from "@mui/material/styles";
import CustomHeaderIcon from "./CustomHeaderButton";

const Header: React.FC = () => {
  const handleLogoClick = (link: string) => {
    window.open(link, "_blank"); // Abrir el enlace en una nueva ventana
  };

  const theme = useTheme();

  // Definir los íconos y los enlaces
  const icons = [
    { component: FaFileAlt, link: "https://example1.com" },
    { component: FaEnvelope, link: "https://example2.com" },
    { component: FaGithub, link: "https://example3.com" },
    { component: FaFigma, link: "https://example4.com" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
      }}
    >
      {/* Título */}
      <Typography
        variant="h3"
        component="h1"
        color={theme.palette.text.primary}
        fontWeight={600}
        sx={{ textAlign: "left" }}
      >
        Flavio Salas
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ textAlign: "left", maxWidth: "500px" }}
      >
        Software Developer con experiencia en React, Node.js, JavaScript,
        TypeScript, Python y Java.
      </Typography>

      {/* Lista de íconos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <CustomHeaderIcon
              key={index}
              onClick={() => handleLogoClick(icon.link)} // Manejar el clic
              icon={<IconComponent size={0} />} // Pasar el ícono
              size="45px" // Tamaño del ícono
              sx={{
                marginRight: ".5rem",
                backgroundColor: "transparent",
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
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;
