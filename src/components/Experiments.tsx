import React from "react";
import { Box, Typography } from "@mui/material";
import { FaFileCode, FaRegImage } from "react-icons/fa"; 
import ExperimentsCard from "./ExperimentsCard";
import { useTheme } from "@mui/material/styles";

const Experiments: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 4,
        mb: 1,
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        color={theme.palette.text.primary}
        fontWeight={600}
        mb={0}
        sx={{ textAlign: "left" }}
      >
        Experimentos
      </Typography>
      <ExperimentsCard
        title="UPSCALEme_"
        description="Web para mejorar la calidad de imágenes. Hecho con React, TypeScript y la API de Cloudinary."
        icon={<FaRegImage />}
        onClick={() => window.open("https://upscale-me.vercel.app/", "_blank")}
      />
      <ExperimentsCard
        title="MDForge"
        description="Hecho con React, permite generar y visualizar un README.md con la integración de varios componentes predefinidos."
        icon={<FaFileCode />}
        onClick={() => window.open("https://md-forge.vercel.app", "_blank")}
      />
    </Box>
  );
};

export default Experiments;
