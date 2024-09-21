// Experiences.js
import React from 'react';
import { Card, CardContent, Typography, Box, Button, Stack, Paper, Container } from '@mui/material';
import bg from '../img/bg-img.jpg'; // Adjust the path based on your project structure

export default function Experiences({ title, list }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      {/* Title Section with Background */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          mb: 6,
          color: '#333',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
          {title}
        </Typography>
      </Box>

      {/* Cards for Experiences */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {list.map((data, index) => (
          <Card
            key={index}
            sx={{
              mb: 3,
              borderRadius: 3,
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
              maxWidth: 800,
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" sx={{ color: '#333', mb: 1 }}>
                {data.name}
              </Typography>
              {data.org && (
                <Typography sx={{ color: '#575395', mb: 1 }}>
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
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                  {data.desc}
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
