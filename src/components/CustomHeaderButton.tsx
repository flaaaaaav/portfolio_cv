import React from "react";
import { IconButton } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface CustomHeaderIconProps {
  icon: React.ReactElement; // El ícono que se va a pasar como propiedad
  onClick: () => void; // El manejador de clic
  size?: string; // Tamaño opcional
  sx?: object; // Estilos opcionales
}

const CustomHeaderIcon: React.FC<CustomHeaderIconProps> = ({
  icon,
  onClick,
  size = "50px", // Tamaño predeterminado para el ícono
  sx = {}, // Estilos adicionales
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
        backgroundColor: "transparent", // Fondo transparente
        "& svg": {
          fill: "currentColor", // El ícono tomará el color actual
          transition: "fill 0.5s", // Ajusta la imagen al contenedor
        },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          // transform: "scale(1.2)",
        },
        ...sx, // Estilos adicionales
      }}
    >
      {icon}
    </IconButton>
  );
};

export default CustomHeaderIcon;
