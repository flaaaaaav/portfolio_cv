import React, { useState } from "react";
import { Box } from "@mui/material";

interface ProjectCardProps {
  image: string;
  logo: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  onClick,
}) => {
 
  const [, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "300px", 
        height: "400px",
        backgroundImage: `url(${image})`,
        backgroundSize: "contain", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: 1,
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
    </Box>
  );
};

export default ProjectCard;
