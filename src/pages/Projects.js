// pages/Research.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Experiences from '../components/Experiences'; // Adjust the import path if needed
import { projects } from '../data/list'; // Assuming this is the correct path to the data

function Projects() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Side Projects
        </Typography>
      </Box>
      <Experiences name="Selected Side Projects" list={projects} />
    </Container>
  );
}

export default Projects;
