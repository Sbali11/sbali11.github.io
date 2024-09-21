// pages/Extracurricular.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Experiences from '../components/Experiences'; // Adjust import path if necessary
import { extracurricular } from '../data/list'; // Assuming this is the path to the data

function Extracurricular() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Extracurricular Activities
        </Typography>
      </Box>
      <Experiences name="Extracurricular" list={extracurricular} />
    </Container>
  );
}

export default Extracurricular;
