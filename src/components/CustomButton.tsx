import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Importa los íconos necesarios

interface CustomButtonProps extends ButtonProps {
  variantColor: "blue" | "green";
  iconType?: "github" | "web"; // Propiedad adicional para definir el ícono
}

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variantColor",
})<CustomButtonProps>(({ theme, variantColor }) => {
  const lightColors = {
    blue: "#1D0F0F",
    green: "#021E20",
  };

  const darkColors = {
    blue: "rgba(74, 112, 203, 0.5)",
    green: "rgba(74, 203, 89, 0.5)",
  };

  const colors = theme.palette.mode === "dark" ? darkColors : lightColors;

  return {
    backgroundColor: colors[variantColor],
    fontSize: "16px",
    color: "#fdfdfd",
    borderRadius: "0px",
    paddingLeft: "16px",
    paddingRight: "16px",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px", // Espacio entre el ícono y el texto
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateX(10px)", // Mover 10px hacia la derecha
      backgroundColor: colors[variantColor],
    },
  };
});

export default function CustomButtonComponent(props: CustomButtonProps) {
  const { iconType, children, ...rest } = props;

  let icon;
  if (iconType === "github") {
    icon = <FaGithub />;
  } else if (iconType === "web") {
    icon = <FaGlobe />;
  }

  return (
    <CustomButton {...rest}>
      {icon}
      {children}
    </CustomButton>
  );
}
