// pages/Research.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Experiences from '../components/Experiences'; // Adjust the import path if needed
import { industry } from '../data/list'; // Assuming this is the correct path to the data

function Research() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Experiences title="Work Experience" list={industry} />
    </Container>
  );
}

export default Research;
