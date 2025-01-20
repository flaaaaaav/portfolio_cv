import React from "react";
import { IconButton } from "@mui/material";

interface CustomHeaderIconProps {
  icon: React.ReactElement;
  onClick: () => void;
  size?: string;
  sx?: object;
}

const CustomHeaderIcon: React.FC<CustomHeaderIconProps> = ({
  icon,
  onClick,
  size = "50px",
  sx = {},
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
        transition: "background-color 0.2s, transform 0.2s ease-out",
        backgroundColor: "transparent",
        "& svg": {
          fill: "currentColor",
          transition: "fill 0.5s",
        },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
        ...sx,
      }}
    >
      {icon}
    </IconButton>
  );
};

export default CustomHeaderIcon;
