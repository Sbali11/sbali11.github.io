// Experiences.js
import React from 'react';
import { Box, Typography, Button, Stack, Paper, Container, Grid } from '@mui/material';
import bg from '../img/bg-img.jpg'; // Adjust the path based on your project structure

export default function Experiences({ title, list }) {
  return (
    <Box
      sx={{
        py: 6,
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#333',
        overflow: 'hidden',
      }}
    >


      <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mb: 3 }}>

      </Box>
        {list.map((data, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              mb: 3,
              borderRadius: 2,
              padding: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#333', mb: 1 }}>
              {data.name}
            </Typography>
            {data.org && (
              <Typography variant="subtitle1" sx={{ color: '#575395', mb: 1 }}>
                {data.org}
              </Typography>
            )}
            <Typography variant="body2" sx={{ color: '#777', mb: 2 }}>
              {data.year}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 2 }}>
              {data.thesis && (
                <Button
                  variant="contained"
                  href={data.thesis}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  MS Thesis
                </Button>
              )}
              {data.paper && (
                <Button
                  variant="contained"
                  href={data.paper}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  Paper
                </Button>
              )}
              {data.report && (
                <Button
                  variant="contained"
                  href={data.report}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  Report
                </Button>
              )}
              {data.poster && (
                <Button
                  variant="contained"
                  href={data.poster}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  Poster
                </Button>
              )}
              {data.video && (
                <Button
                  variant="contained"
                  href={data.video}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  Video
                </Button>
              )}
              {data.code && (
                <Button
                  variant="contained"
                  href={data.code}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  Code
                </Button>
              )}
              {data.website && (
                <Button
                  variant="contained"
                  href={data.website}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  Website
                </Button>
              )}
              {data.article && (
                <Button
                  variant="contained"
                  href={data.article}
                  sx={{ backgroundColor: '#575395', color: 'white', textTransform: 'none' }}
                >
                  News Article
                </Button>
              )}
            </Stack>
            <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
              {data.desc}
            </Typography>
          </Paper>
        ))}
      </Container>
    </Box>
  );
}
