import React from "react";
import { Box, Typography } from "@mui/material";
import ExperimentsCard from "./ExperimentsCard";
import { useTheme } from "@mui/material/styles";

const Experiments: React.FC = () => {
  const handleCardClick = (title: string) => {
    alert(`Card clicked: ${title}`);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 4,
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
        title="AudioX"
        description="Conversor de audio hecho con React y FFmpeg. Permite la conversión en conjunto y soporta los formatos de audio más populares."
        iconUrl="vite.svg"
        onClick={() => handleCardClick("Experiment 1")}
      />
    </Box>
  );
};

export default Experiments;
