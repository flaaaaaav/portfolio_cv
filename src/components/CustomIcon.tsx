import React from "react";
import { IconButton } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface CustomIconProps {
  icon?: React.ReactElement; // Elemento de ícono (e.g. <Brightness4 />)
  src?: string; // Propiedad para el src de la imagen
  onClick: (event: React.MouseEvent) => void;
  color?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"; // Valor restringido
  size?: string; // Tamaño opcional
  sx?: object; // Estilos opcionales
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  src,
  onClick,
  color = "inherit", // Valor predeterminado para el color
  size = "36px", // Valor predeterminado para el tamaño
  sx = {},
}) => {
  return (
    <IconButton
      onClick={onClick}
      color={color} // Asegúrate de que sea un valor válido de "inherit", "primary", etc.
      sx={{
        height: size,
        width: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        transition: "background-color 0.2s, transform 0.2s ease-out",
        backgroundColor: "transparent", // Color de fondo opcional
        "& img": {
          fill: "currentColor", // El ícono tomará el color actual
          transition: "fill 0.2s", // Ajusta la imagen al contenedor
        },
        "& svg": {
          fill: "currentColor", // El ícono tomará el color actual
          transition: "fill 0.2s",
        },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.08)", // Hover background
          transform: "scale(1.2)",
        },
        ...sx, // Se agregan los estilos adicionales
      }}
    >
      {src ? (
        <img src={src} alt="custom-icon" /> // Si hay un src, muestra una imagen
      ) : (
        icon // Si no hay src, muestra el icono
      )}
    </IconButton>
  );
};

export default CustomIcon;
