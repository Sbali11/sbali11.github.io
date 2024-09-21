// Home.js
import { Container, Grid, Box, Typography, Link, IconButton, Avatar, Stack, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img from '../img/profile.jpg';
import bg from '../img/bg-img.jpg';
import news from '../data/news'; // Import the news list

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      {/* Photo and Bio Section */}
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
          color: '#333', // Adjusted text color for better contrast against white background
        }}
      >
        <Avatar
          alt="Shreya Bali"
          src={img}
          sx={{
            width: 150,
            height: 150,
            mb: 2,
            border: '4px solid #fff',
          }}
        />
        <Box sx={{ ml: 3, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Shreya Bali
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
            <IconButton href="https://scholar.google.com/citations?user=MkIlWQsAAAAJ&hl=en" color="inherit">
              <GoogleIcon />
            </IconButton>
            <IconButton href="https://github.com/Sbali11" color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://twitter.com/ShreyaBali3" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com/in/shreya-bali-089478107" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* About Me and Description */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#333' }}>
            I am a PhD student at the{' '}
            <Link href="https://hcii.cmu.edu/" color="primary" underline="hover">
              Human-Computer Interaction Institute (HCII) at Carnegie Mellon University
            </Link>
            . My research focuses on the intersection of Machine Learning, Social Computing, and Sensing, under the
            guidance of{' '}
            <Link href="http://www.mayankgoel.com/" color="primary" underline="hover">
              Prof. Mayank Goel
            </Link>
            . I am particularly passionate about using these technologies to bridge the "communication gaps" between
            experts and non-experts in different domains, with a current focus on healthcare.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#333' }}>
            Prior to my PhD, I worked with the Auth and Anti-Abuse Teams at{' '}
            <Link href="https://www.databricks.com/" color="primary" underline="hover">
              Databricks
            </Link>
            , where I developed solutions to enhance user security and privacy. I hold a Bachelor’s and Master’s degree
            in Computer Science from{' '}
            <Link href="https://www.cs.cmu.edu/" color="primary" underline="hover">
              Carnegie Mellon University
            </Link>
            .
          </Typography>
          <Typography variant="body1" sx={{ color: '#333' }}>
            I have contributed to various HCI and ML projects at{' '}
            <Link href="https://www.cs.cmu.edu/~eheartlab/" color="primary" underline="hover">
              Expertise@Scale Lab
            </Link>
            ,{' '}
            <Link href="https://www.cs.cmu.edu/~eheartlab/" color="primary" underline="hover">
              eHeartLab
            </Link>
            , and the{' '}
            <Link href="http://multicomp.cs.cmu.edu/people/previous-members/" color="primary" underline="hover">
              MultiComp Lab
            </Link>
            , exploring innovative ways to bridge the gap between humans and technology.
          </Typography>
        </Grid>
      </Grid>

      {/* News Section */}
      <Box mt={8}>
        <Typography variant="h5" gutterBottom>
          Recent News & Updates
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            maxHeight: 300, // Set the max height of the news section
            overflowY: 'auto', // Enable vertical scrolling
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          {news.map((item, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1" sx={{ color: '#333' }}>
                <strong>{item.date}:</strong> {item.content}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    </Container>
  );
}
