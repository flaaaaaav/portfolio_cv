import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  useTheme,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import { send } from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    try {
      const result = await send(serviceId, templateId, formData, userId);

      if (result.status === 200) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setError(true); 
    } finally {
      setLoading(false);
      setOpenModal(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 4,
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        color={theme.palette.text.primary}
        fontWeight={600}
        mb={3}
        sx={{ textAlign: "left" }}
      >
        Contacto
      </Typography>
      <Box sx={{ width: { lg: "650px" } }}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              mb: 1.5,
              color: theme.palette.text.primary,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                  color: theme.palette.text.primary,
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.text.primary,
              "&.Mui-focused": {
                color: theme.palette.text.primary,
              },
            },
          }}
        />
        <TextField
          label="Correo Electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              mb: 1.5,
              color: theme.palette.text.primary,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                  color: theme.palette.text.primary,
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.text.primary,
              "&.Mui-focused": {
                color: theme.palette.text.primary,
              },
            },
          }}
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              mb: 1.5,
              color: theme.palette.text.primary,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                  color: theme.palette.text.primary,
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.primary,
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: theme.palette.text.primary,
              "&.Mui-focused": {
                color: theme.palette.text.primary,
              },
            },
          }}
        />
        <Button
  type="submit"
  variant="contained"
  disabled={loading || !formData.name || !formData.email || !formData.message}
  fullWidth
  sx={{
    fontWeight: "600",
    textTransform: "none",
    boxShadow: "none",
    borderRadius: "0",
    backgroundColor: theme.palette.text.primary,
    transition: "opacity 0.1s ease",
    "&:hover": {
      opacity: 0.5,
    },
  }}
>
  {loading ? <CircularProgress size={24} /> : "Enviar"}
</Button>

      </Box>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: theme.palette.background.paper,
              p: 3,
              boxShadow: 24,
              textAlign: "center",
              width: {lg: "600px"},
            }}
            
          >
            <Typography
              variant="h6"
              color={theme.palette.text.primary} 
              fontWeight={600}
            >
              {success
                ? "¡Gracias por ponerte en contacto!"
                : error
                ? "Hubo un error al enviar el mensaje..."
                : "Procesando..."}
            </Typography>

            <Typography
              variant="body2"
              color={theme.palette.text.secondary}
              sx={{ mt: 1 }}
            >
              {success
                ? "Voy a reponderte lo antes posible."
                : error
                ? "Parece que hubo un problema al enviar tu mensaje. Por favor, intentalo nuevamente."
                : ""}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "600",
                textTransform: "none",
                boxShadow: "none",
                borderRadius: "8px",
                mt: 2,
                backgroundColor: theme.palette.text.primary,
                transition: "opacity 0.1s ease",
                "&:hover": {
                  opacity: 0.5,
                },
              }}
              onClick={() => setOpenModal(false)}
            >
              Cerrar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ContactForm;
