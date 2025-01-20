import React from "react";
import { IconButton } from "@mui/material";

interface CustomIconProps {
  icon?: React.ReactElement;
  src?: string;
  onClick: (event: React.MouseEvent) => void;
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  size?: string;
  sx?: object;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  src,
  onClick,
  color = "inherit",
  size = "36px",
  sx = {},
}) => {
  return (
    <IconButton
      onClick={onClick}
      color={color}
      sx={{
        height: size,
        width: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        transition: "background-color 0.2s, transform 0.2s ease-out",
        backgroundColor: "transparent",
        "& img": {
          fill: "currentColor",
          transition: "fill 0.2s",
        },
        "& svg": {
          fill: "currentColor",
          transition: "fill 0.2s",
        },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          transform: "scale(1.2)",
        },
        ...sx,
      }}
    >
      {src ? (
        <img src={src} alt="custom-icon" />
      ) : (
        icon 
      )}
    </IconButton>
  );
};

export default CustomIcon;
