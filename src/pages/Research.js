// pages/Research.js
import React from 'react';
import { Container } from '@mui/material';
import Experiences from '../components/Experiences'; // Adjust the import path if needed
import { research } from '../data/list'; // Assuming this is the correct path to the data

function Research() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Experiences name="Research" title="Research Projects" list={research} />
    </Container>
  );
}

export default Research;
