import React from "react";
import { IconButton } from "@mui/material";

interface CustomExperimentIconProps {
  icon: React.ReactElement;
  size?: string;
  sx?: object;
  onClick?: () => void;
}

const CustomExperimentIcon: React.FC<CustomExperimentIconProps> = ({
  icon,
  size = "50px",
  sx = {},
  onClick,
}) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        height: size,
        width: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
        "& svg": {
          fill: "currentColor",
        },
        ...sx,
      }}
    >
      {icon}
    </IconButton>
  );
};

export default CustomExperimentIcon;
