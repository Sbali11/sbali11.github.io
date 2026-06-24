// Home.js
import {
  Container, Box, Typography, Link, Avatar, Stack, Paper, Chip,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import img from '../img/profile.jpg';
import news from '../data/news';

const evidotesFig    = `${process.env.PUBLIC_URL}/paper_figs/evidotes.png`;
const calmFig        = `${process.env.PUBLIC_URL}/paper_figs/calmreminder.png`;
const nooksFig       = `${process.env.PUBLIC_URL}/paper_figs/nooks.png`;

const SectionHeading = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
    <Typography
      sx={{
        fontWeight: 600,
        color: '#9ca3af',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        whiteSpace: 'nowrap',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {children}
    </Typography>
    <Box sx={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }} />
  </Box>
);

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Box
        sx={{
          background: '#fafafa',
          borderBottom: '1px solid #e5e7eb',
          pt: { xs: 5, md: 7 },
          pb: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'center' },
              gap: { xs: 3, md: 5 },
            }}
          >
            {/* Photo */}
            <Box sx={{ flexShrink: 0 }}>
              <Avatar
                alt="Shreya Bali"
                src={img}
                sx={{
                  width: { xs: 136, md: 160 },
                  height: { xs: 136, md: 160 },
                  border: '3px solid #e5e7eb',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
              />
            </Box>

            {/* Bio text */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                  fontSize: { xs: '1.9rem', md: '2.4rem' },
                  color: '#0f172a',
                  fontFamily: '"Georgia", "Times New Roman", serif',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                Shreya Bali
              </Typography>

              <Typography
                sx={{
                  mb: 0.5,
                  color: '#374151',
                  fontWeight: 500,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                PhD Student · Human-Computer Interaction
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 3,
                  gap: 0.625,
                }}
              >
                <SchoolIcon sx={{ fontSize: 14, color: '#c84b31' }} />
                <Typography sx={{ color: '#6b7280', fontSize: '0.875rem', fontFamily: "'Inter', sans-serif" }}>
                  Carnegie Mellon University
                </Typography>
              </Box>

              {/* Social links */}
              <Stack
                direction="row"
                spacing={0.625}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexWrap="wrap"
                sx={{ rowGap: 0.625 }}
              >
                {[
                  { icon: <EmailIcon sx={{ fontSize: 13 }} />, href: 'mailto:sbali@andrew.cmu.edu', label: 'Email' },
                  { icon: <GoogleIcon sx={{ fontSize: 13 }} />, href: 'https://scholar.google.com/citations?user=MkIlWQsAAAAJ&hl=en', label: 'Scholar' },
                  { icon: <GitHubIcon sx={{ fontSize: 13 }} />, href: 'https://github.com/Sbali11', label: 'GitHub' },
                  { icon: <TwitterIcon sx={{ fontSize: 13 }} />, href: 'https://twitter.com/ShreyaBali3', label: 'Twitter' },
                  { icon: <LinkedInIcon sx={{ fontSize: 13 }} />, href: 'https://linkedin.com/in/shreya-bali-089478107', label: 'LinkedIn' },
                ].map(({ icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 1.125,
                      py: 0.5,
                      borderRadius: '6px',
                      border: '1px solid #e5e7eb',
                      color: '#374151',
                      fontSize: '0.76rem',
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.15s ease',
                      '&:hover': {
                        backgroundColor: '#f3f4f6',
                        borderColor: '#d1d5db',
                        color: '#111827',
                      },
                    }}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <Container maxWidth="md" sx={{ pt: 5, pb: 8 }}>

        {/* About */}
        <Box sx={{ mb: 6 }}>
          <SectionHeading>About</SectionHeading>

          {/* Pull quote */}
          <Box
            sx={{
              borderLeft: '2px solid #111827',
              pl: 2.5,
              mb: 3,
              py: 0.25,
            }}
          >
            <Typography
              sx={{
                color: '#111827',
                fontSize: { xs: '0.98rem', md: '1.02rem' },
                lineHeight: 1.75,
                fontWeight: 600,
                fontFamily: '"Georgia", serif',
              }}
            >
              I study how AI can support decisions when there is no single right answer.
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.85,
              mb: 2,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            As AI becomes increasingly embedded in healthcare, science, education, and everyday life, most systems
            are designed to optimize a predefined objective and produce a recommendation. Yet many consequential
            decisions do not fit this paradigm. People often face incomplete evidence, competing priorities, evolving
            goals, and multiple legitimate ways of interpreting the same situation.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.85,
              mb: 2,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            My research investigates what AI should do in these settings.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.85,
              mb: 2,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            I design mixed-initiative AI systems that help people explore alternative perspectives, understand
            tradeoffs, and shape the objectives that guide their decisions. Rather than treating human goals as fixed
            inputs to be inferred and optimized, I study how people actively construct, negotiate, and revise what
            matters to them over time.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.85,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Across domains ranging from healthcare to social computing, my work examines how AI can support human
            judgment when multiple reasonable paths may coexist. Ultimately, I am interested in building AI systems
            that do not simply provide answers, but help people navigate uncertainty, deliberate about what matters,
            and determine which futures they want to pursue.
          </Typography>

          {/* Research Interests */}
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: '#9ca3af',
                mb: 1.5,
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Research Interests
            </Typography>
            <Typography
              sx={{
                color: '#374151',
                fontSize: '0.95rem',
                lineHeight: 1.75,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Designing AI systems that support multiple legitimate interpretations, goals, and uses rather than
              assuming a single intended one by carefully giving more control to humans
            </Typography>
          </Box>
        </Box>

        {/* Featured Research */}
        <Box sx={{ mb: 6 }}>
          <SectionHeading>Featured Research</SectionHeading>

          <Stack spacing={2.5}>
            {/* ── Evidotes ── */}
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#c4b5fd',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                {/* Accent bar */}
                <Box
                  sx={{
                    width: { xs: '100%', sm: 6 },
                    height: { xs: 6, sm: 'auto' },
                    background: 'linear-gradient(180deg, #7c3aed 0%, #a855f7 100%)',
                    flexShrink: 0,
                  }}
                />
                {/* Text content */}
                <Box sx={{ p: { xs: 2.5, md: 3 }, flex: 1, minWidth: 0 }}>
                  <Stack direction="row" spacing={0.75} alignItems="center" flexWrap="wrap" sx={{ mb: 1, rowGap: 0.75 }}>
                    <Chip label="CHI 2026" size="small" sx={{ backgroundColor: '#ede9fe', color: '#7c3aed', fontWeight: 700, fontSize: '0.64rem', height: 19 }} />
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', color: '#92400e', backgroundColor: '#fef3c7', px: 1, py: 0.2, borderRadius: '10px', fontSize: '0.66rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                      <EmojiEventsIcon sx={{ mr: 0.5, fontSize: 11 }} />
                      Best Paper Honorable Mention
                    </Box>
                  </Stack>

                  <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: '1rem', lineHeight: 1.3, mb: 0.25 }}>
                    Evidotes
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.74rem', fontStyle: 'italic', mb: 1.5, fontFamily: "'Inter', sans-serif" }}>
                    <strong style={{ color: '#6b7280' }}>Shreya Bali</strong>, Riku Arakawa, Peace Odiase, Sherry Wu, Mayank Goel
                  </Typography>

                  <Typography sx={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.7, mb: 2, fontFamily: "'Inter', sans-serif" }}>
                    Health AI systems typically assume that more evidence leads to better decisions. We found that
                    people often need different ways of engaging with evidence instead. Evidotes allows users to
                    dynamically switch between evidence lenses—diving deeper into research, focusing on positive
                    experiences, or stepping back to see the broader picture. In a study with chronic illness
                    patients, participants used these lenses to make sense of uncertainty, treating scientific
                    findings and lived experiences as complementary rather than competing sources of knowledge.
                  </Typography>

                  <Typography sx={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                    <strong style={{ color: '#111827' }}>Key insight:</strong>{' '}
                    The same evidence can support different sensemaking goals at different moments.
                  </Typography>
                </Box>

                {/* Figure image */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 220,
                    flexShrink: 0,
                    borderLeft: '1px solid #f0f0f0',
                    backgroundColor: '#fafafa',
                    p: 1.75,
                  }}
                >
                  <Box
                    component="img"
                    src={evidotesFig}
                    alt="Evidotes paper figure"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 185,
                      objectFit: 'contain',
                      borderRadius: '6px',
                    }}
                  />
                </Box>
              </Box>

              {/* Mobile figure */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', px: 3, pb: 2.5, pt: 0 }}>
                <Box
                  component="img"
                  src={evidotesFig}
                  alt="Evidotes paper figure"
                  sx={{ width: '100%', maxHeight: 140, objectFit: 'contain', borderRadius: '6px', backgroundColor: '#fafafa', p: 1 }}
                />
              </Box>
            </Paper>

            {/* ── CalmReminder ── */}
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#a7f3d0',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ width: { xs: '100%', sm: 6 }, height: { xs: 6, sm: 'auto' }, background: 'linear-gradient(180deg, #059669 0%, #34d399 100%)', flexShrink: 0 }} />
                <Box sx={{ p: { xs: 2.5, md: 3 }, flex: 1, minWidth: 0 }}>
                  <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mb: 1 }}>
                    <Chip label="CHI 2026" size="small" sx={{ backgroundColor: '#d1fae5', color: '#047857', fontWeight: 700, fontSize: '0.64rem', height: 19 }} />
                  </Stack>

                  <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: '1rem', lineHeight: 1.3, mb: 0.25 }}>
                    CalmReminder
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.74rem', fontStyle: 'italic', mb: 1.5, fontFamily: "'Inter', sans-serif" }}>
                    Riku Arakawa*, <strong style={{ color: '#6b7280' }}>Shreya Bali*</strong>, Anupama Sitaraman, Woosuk Seo, et al.
                  </Typography>

                  <Typography sx={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.7, mb: 2, fontFamily: "'Inter', sans-serif" }}>
                    Behavior-change technologies are typically designed around a predefined intervention strategy.
                    CalmReminder challenged this assumption by identifying moments when children were calm and
                    prompting parents to provide positive reinforcement. During a four-week deployment, families
                    adapted the system in unexpected ways—using notifications not only for praise, but also as
                    mindfulness cues, conversation starters, and reminders for physical activity.
                  </Typography>

                  <Typography sx={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                    <strong style={{ color: '#111827' }}>Key insight:</strong>{' '}
                    People actively reinterpret and repurpose AI interventions to fit their own goals and contexts.
                  </Typography>
                </Box>

                {/* Figure */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 220,
                    flexShrink: 0,
                    borderLeft: '1px solid #f0f0f0',
                    backgroundColor: '#fafafa',
                    p: 1.75,
                  }}
                >
                  <Box
                    component="img"
                    src={calmFig}
                    alt="CalmReminder paper figure"
                    sx={{ width: '100%', height: 'auto', maxHeight: 185, objectFit: 'contain', borderRadius: '6px' }}
                  />
                </Box>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', px: 3, pb: 2.5, pt: 0 }}>
                <Box
                  component="img"
                  src={calmFig}
                  alt="CalmReminder paper figure"
                  sx={{ width: '100%', maxHeight: 140, objectFit: 'contain', borderRadius: '6px', backgroundColor: '#fafafa', p: 1 }}
                />
              </Box>
            </Paper>

            {/* ── Nooks ── */}
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#fcd34d',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ width: { xs: '100%', sm: 6 }, height: { xs: 6, sm: 'auto' }, background: 'linear-gradient(180deg, #f59e0b 0%, #fbbf24 100%)', flexShrink: 0 }} />
                <Box sx={{ p: { xs: 2.5, md: 3 }, flex: 1, minWidth: 0 }}>
                  <Stack direction="row" spacing={0.75} alignItems="center" flexWrap="wrap" sx={{ mb: 1, rowGap: 0.75 }}>
                    <Chip label="CHI 2023" size="small" sx={{ backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 700, fontSize: '0.64rem', height: 19 }} />
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', color: '#92400e', backgroundColor: '#fef3c7', px: 1, py: 0.2, borderRadius: '10px', fontSize: '0.66rem', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                      <EmojiEventsIcon sx={{ mr: 0.5, fontSize: 11 }} />
                      Best Paper Honorable Mention
                    </Box>
                  </Stack>

                  <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: '1rem', lineHeight: 1.3, mb: 0.25 }}>
                    Nooks
                  </Typography>
                  <Typography sx={{ color: '#9ca3af', fontSize: '0.74rem', fontStyle: 'italic', mb: 1.5, fontFamily: "'Inter', sans-serif" }}>
                    <strong style={{ color: '#6b7280' }}>Shreya Bali</strong>, Pranav Khadpe, Geoff Kaufman, Chinmay Kulkarni
                  </Typography>

                  <Typography sx={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.7, mb: 2, fontFamily: "'Inter', sans-serif" }}>
                    Workplace social technologies often reinforce existing hierarchies and social visibility. Nooks
                    explored an alternative design: anonymous, interest-driven spaces where conversations were
                    decoupled from identity. By reducing concerns about social evaluation, participants engaged in
                    more authentic discussions and formed connections that would have been unlikely through
                    traditional workplace channels.
                  </Typography>

                  <Typography sx={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                    <strong style={{ color: '#111827' }}>Key insight:</strong>{' '}
                    Sometimes meaningful connection emerges when technology removes information rather than adds it.
                  </Typography>
                </Box>

                {/* Figure */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 220,
                    flexShrink: 0,
                    borderLeft: '1px solid #f0f0f0',
                    backgroundColor: '#fafafa',
                    p: 1.75,
                  }}
                >
                  <Box
                    component="img"
                    src={nooksFig}
                    alt="Nooks paper figure"
                    sx={{ width: '100%', height: 'auto', maxHeight: 185, objectFit: 'contain', borderRadius: '6px' }}
                  />
                </Box>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', px: 3, pb: 2.5, pt: 0 }}>
                <Box
                  component="img"
                  src={nooksFig}
                  alt="Nooks paper figure"
                  sx={{ width: '100%', maxHeight: 140, objectFit: 'contain', borderRadius: '6px', backgroundColor: '#fafafa', p: 1 }}
                />
              </Box>
            </Paper>
          </Stack>
        </Box>

        {/* News */}
        <Box>
          <SectionHeading>News</SectionHeading>

          <Box sx={{ position: 'relative', pl: 2.5, maxHeight: 460, overflowY: 'auto', pr: 0.5 }}>
            <Box sx={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: '1px', backgroundColor: '#e5e7eb' }} />

            {news.map((item, index) => (
              <Box key={index} sx={{ position: 'relative', mb: 2.25, pl: 1.75 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: -4.5,
                    top: 7,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === 0 ? '#111827' : '#d1d5db',
                    boxShadow: index === 0 ? '0 0 0 2.5px rgba(17,24,39,0.15)' : 'none',
                  }}
                />
                <Typography
                  sx={{ color: '#374151', lineHeight: 1.7, fontSize: '0.875rem', fontFamily: "'Inter', sans-serif" }}
                >
                  <Box component="span" sx={{ fontWeight: 600, color: '#9ca3af', mr: 1.5, fontSize: '0.73rem', display: 'inline-block', minWidth: '34px', fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}>
                    {item.date}
                  </Box>
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
