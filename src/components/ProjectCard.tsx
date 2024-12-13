import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface ProjectCardProps {
  image: string; // URL de la imagen de fondo
  logo: string; // URL del logo
  title: string; // Título del proyecto
  description: string; // Descripción para mostrar en el modal
  onClick: () => void; // Función para manejar el clic en la tarjeta
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  logo,
  title,
  description,
  onClick,
}) => {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "300px", // Ancho fijo
        height: "400px", // Altura proporcional a la imagen original
        backgroundImage: `url(${image})`,
        backgroundSize: "contain", // Asegura que la imagen no se recorte
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        backgroundPosition: "center",
        borderRadius: 1,
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)", // Efecto de zoom al pasar el mouse
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick} // Llama a la función proporcionada en las props
    >
      {/* Aquí podrías agregar contenido adicional, como el logo */}
    </Box>
  );
};

export default ProjectCard;
