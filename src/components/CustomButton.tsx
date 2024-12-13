import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomButtonProps extends ButtonProps {
  variantColor: "blue" | "green";
}

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variantColor",
})<CustomButtonProps>(({ theme, variantColor }) => {
  const lightColors = {
    blue: "#4a70cb",
    green: "#4acb59",
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
    fontWeight: "bold",
    borderRadius: "12px",
    paddingLeft: "16px",
    paddingRight: "16px",
    textTransform: "none",
    "&:hover": {
      transition: ".3s",
      scale: "1.1",
      backgroundColor: colors[variantColor],
      opacity: 0.5,
    },
  };
});

export default function CustomButtonComponent(props: CustomButtonProps) {
  return <CustomButton {...props}>{props.children}</CustomButton>;
}
