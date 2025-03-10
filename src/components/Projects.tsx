import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomModal from "./CustomModal";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      image: "media/p2.jpg",
      image_in: "media/p2_m.jpg",
      title: "UBUNTU - Financiamiento Sostenible",
      description:
        "Desarrollamos una plataforma destinada a fomentar microemprendimientos enfocados en la sostenibilidad. Como parte del equipo encargado del frontend, utilizamos <b>React</b> junto con <b>Material-UI</b> para crear una interfaz de usuario interactiva, moderna y fácil de usar. Implementamos funcionalidades clave como la autenticación de usuarios mediante <b>Google Auth</b>, gestionando el flujo de inicio de sesión de forma segura y eficiente. En el backend, trabajé en menor escala con <b>Java</b> y <b>Spring Boot</b> para ayudar en la construcción de la API, permitiendo la gestión y almacenamiento de datos relacionados con los microemprendimientos.",
      logo: "media/punto&aprende.png",
      languages: ["JavaScript", "React", "Java"],
      demoLink: undefined,
      repoLink: "https://github.com/flaaaaaav/Ubuntu-Semillero",
    },
    {
      image: "media/p1.jpg",
      image_in: "media/p1_m.jpg",
      title: "Punto&Aprende",
      description:
        "En este proyecto, desarrollamos una plataforma de gestión de inscripciones, donde lideré el desarrollo del frontend y participé del backend. Utilizamos <b>React</b> con <b>Material-UI</b> y <b>TypeScript</b> para la interfaz, con un diseño claro y funcionalidades intuitivas para gestionar inscripciones de estudiantes y administradores. En el backend, implementamos una API REST utilizando <b>Java</b> y <b>Spring Boot</b>, gestionando operaciones de CRUD para las inscripciones y usuarios. Además, integré <b>Google Auth</b> para la autenticación de usuarios, garantizando la seguridad en el acceso a la plataforma. Para el deploy, utilicé <b>Docker</b> para contenedores de la API y configuré la base de datos <b>MariaDB</b> para almacenar datos de manera eficiente.",
      logo: "asdas",
      languages: ["React", "TypeScript", "Java"],
      demoLink: "https://gestion-inscripciones-front-deploy.onrender.com/",
      repoLink: "https://github.com/flaaaaaav/inscripcionesFront/tree/Flav-frontend/ui-inscripciones",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const theme = useTheme();

  const handleCardClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h5"
        component="h1"
        color={theme.palette.text.primary}
        fontWeight={600}
        mb={3}
        sx={{ textAlign: "left" }}
      >
        Proyectos
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard
              logo={project.logo}
              image={project.image}
              title={project.title}
              description={project.description}
              onClick={() => handleCardClick(project)}
            />
          </Grid>
        ))}
      </Grid>
      {selectedProject && (
        <CustomModal
          open={open}
          onClose={() => setOpen(false)}
          title={selectedProject.title}
          subtitle={
            <div
              dangerouslySetInnerHTML={{
                __html: selectedProject.description,
              }}
            />
          }
          languages={selectedProject.languages}
          demoLink={selectedProject.demoLink}
          repoLink={selectedProject.repoLink}
          imageSrc={selectedProject.image_in}
        />
      )}
    </Box>
  );
};

export default Projects;
