// Home.js
import { Container, Card, Grid, Box, Typography, Link, IconButton, Avatar, Stack, Paper } from '@mui/material';
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
            Hello! I am a PhD student at the{' '}
            <Link href="https://hcii.cmu.edu/" color="primary" underline="hover">
              Human-Computer Interaction Institute (HCII) at Carnegie Mellon University
            </Link>
            . My research focuses on the intersection of Machine Learning, Social Computing, and Sensing, under the
            guidance of{' '}
            <Link href="http://www.mayankgoel.com/" color="primary" underline="hover">
              Prof. Mayank Goel
            </Link>
            . I build AI systems for contested domains where multiple valid perspectives legitimately coexist. My research asks: How do we architect infrastructure that preserves value pluralism rather than optimizing toward singular metrics—both for individuals with changing priorities and for stakeholders coordinating across competing needs?
              Drawing on prior experience as a Software Engineer at             <Link href="https://www.databricks.com/" color="primary" underline="hover">
              Databricks
            </Link>, I create and study interactive prototypes that balance AI initiative with human oversight: systems that time interventions when people can act, surface evidence the way users choose to see it, or let experts curate and revise model outputs. 
              Across my work, I aim to demonstrate that AI infrastructure for pluralism requires (1) systems that make value conflicts visible rather than hidden, (2) mechanisms for defining and switching between frameworks, and (3) coordination support when stakeholders' legitimate perspectives diverge.
              </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#333' }}>
             I hold a Bachelor’s and Master’s degree
            in Computer Science from{' '}
            <Link href="https://www.cs.cmu.edu/" color="primary" underline="hover">
              Carnegie Mellon University
            </Link>
            .
          </Typography>
          <Typography variant="body1" sx={{ color: '#333' }}>
            I have contributed to various HCI and ML projects at{' '}
            <Link href="https://www.cs.cmu.edu/~chinmayk/" color="primary" underline="hover">
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
        <Card variant='outlined'
          sx={{
            p: 2,
            maxHeight: 300, // Set the max height of the news section
            overflowY: 'auto', // Enable vertical scrolling
            borderRadius: '10px',
          }}
        >
          {news.map((item, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1" sx={{ color: '#333' }}>
                <strong>{item.date}:</strong> {item.content}
              </Typography>
            </Box>
          ))}
        </Card>
      </Box>
    </Container>
  );
}
