import React from "react";
import { Box, Typography } from "@mui/material";
import CustomExperimentIcon from "./CustomExperimentsIcon";

interface ExperimentCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const ExperimentsCard: React.FC<ExperimentCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        padding: ".5rem 2rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        maxWidth: "500px",
        "&:hover": {
          transform: "translateX(10px)",
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ marginRight: 2 }}>
        <CustomExperimentIcon icon={icon} />
      </Box>
      <Box>
        <Typography variant="body2" fontWeight="600">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

export default ExperimentsCard;
