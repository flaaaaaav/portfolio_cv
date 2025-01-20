import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Slide,
  SlideProps,
} from "@mui/material";
import CustomButton from "./CustomButton";
import { FaArrowLeft } from "react-icons/fa";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: React.ReactNode;
  languages: string[];
  demoLink?: string;
  repoLink: string;
  imageSrc: string;
}

const Transition = React.forwardRef(function Transition(
  props: SlideProps,
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  subtitle,
  languages,
  demoLink,
  repoLink,
  imageSrc,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullScreen
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: theme.palette.background.default,
      boxShadow: "none", 
      backgroundImage: "none", 
        },
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
        }}
      >
        <Box
  sx={{
    bgcolor: theme.palette.background.default,
    pl: 4,
    mt: 2,
    mb: 2,
    minWidth: "1000px",
    display: "flex",
    justifyContent: "flex-start",
  }}
>
  <IconButton
    onClick={onClose}
    sx={{
      backgroundColor: "transparent",
      alignSelf: "flex-start",
      transition: "transform .5s ease-in-out",
      "&:hover": {
        backgroundColor: "transparent",
        transform: "scale(1.5) rotate(360deg)",
      },
    }}
  >
    <FaArrowLeft />
  </IconButton>
</Box>

      </Box>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          bgcolor: theme.palette.background.default,
                    color: theme.palette.text.primary,
          overflowY: "auto",
          p: 0,
        }}
      >
        <Box
          sx={{
            maxWidth: "1000px",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: "space-between",
            p: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              mr: isMobile ? 0 : 1,
              gap: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {subtitle}
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={1}>
              Lenguajes utilizados
            </Typography>
            <ul
              style={{
                display: "flex",
                gap: "16px",
                listStyle: "none",
                paddingLeft: 0,
                margin: 0,
              }}
            >
              {languages.map((language) => (
                <li key={language}>
                  <Typography variant="body1" fontWeight={500}>
                    {language}
                  </Typography>
                </li>
              ))}
            </ul>
            <Box sx={{ display: "flex", gap: 2, mt: 3, mb: 5 }}>
              {demoLink && (
                <CustomButton
                  variantColor="blue"
                  iconType="web"
                  onClick={() => window.open(demoLink, "_blank")}
                >
                  Demo
                </CustomButton>
              )}
              <CustomButton
                variantColor="green"
                iconType="github"
                onClick={() => window.open(repoLink, "_blank")}
              >
                Repositorio
              </CustomButton>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imageSrc}
              alt="Preview"
              style={{
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
