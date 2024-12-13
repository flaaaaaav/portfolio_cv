import React from "react";
import { Box, Typography } from "@mui/material";

interface ExperimentCardProps {
  title: string;
  description: string;
  iconUrl: string; // URL del icono PNG
  onClick: () => void;
}

const ExperimentsCard: React.FC<ExperimentCardProps> = ({
  title,
  description,
  iconUrl,
  onClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        padding: 2,
        mb: "2rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        maxWidth: "500px",
        "&:hover": {
          transform: "translateX(10px)", // Mueve el componente 10px hacia la derecha
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ marginRight: 2 }}>
        <img src={iconUrl} alt="experiment-icon" width="30" height="30" />
      </Box>
      <Box>
        <Typography variant="body2" fontWeight="600" sx={{}}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

export default ExperimentsCard;
