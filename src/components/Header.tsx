import React from "react";
import { Box, Typography } from "@mui/material";
import { FaGithub, FaFileAlt, FaLinkedin } from "react-icons/fa"; 
import { useTheme } from "@mui/material/styles";
import CustomHeaderIcon from "./CustomHeaderButton";

const Header: React.FC = () => {
  const handleLogoClick = (link: string) => {
    window.open(link, "_blank"); 
  };

  const theme = useTheme();

  const icons = [
    { component: FaFileAlt, link: "/docs/Flavio-Guillermo-Salas-38455360.pdf" },
    { component: FaLinkedin, link: "https://www.linkedin.com/in/flavio-guillermo-salas/" },
    { component: FaGithub, link: "https://github.com/flaaaaaav/" },
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
      <Typography
        variant="h3"
        component="h1"
        color={theme.palette.text.primary}
        fontWeight={600}
        sx={{ textAlign: "left" }}
      >
        Flavio Salas
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ textAlign: "left", maxWidth: "500px" }}
      >
        Software Developer con experiencia en React, Node.js, JavaScript,
        TypeScript, Python y Java.
      </Typography>

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
              onClick={() => handleLogoClick(icon.link)} 
              icon={<IconComponent size={0} />} 
              size="45px" 
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
