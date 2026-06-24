// components/NavigationBar.js
import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box,
  Drawer, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { text: 'About', path: '/' },
    { text: 'Research', path: '/research' },
    { text: 'Work Experience', path: '/industry' },
    { text: 'Projects', path: '/projects' },
  ];

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.97)',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'box-shadow 0.25s ease, backdrop-filter 0.25s ease',
        color: '#111827',
      }}
    >
      <Toolbar
        sx={{
          py: 0.5,
          maxWidth: 960,
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 3 },
          minHeight: '56px !important',
        }}
      >
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#374151',
            mr: 1,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#111827',
            fontWeight: 700,
            fontSize: '1rem',
            fontFamily: '"Georgia", "Times New Roman", serif',
            letterSpacing: '-0.02em',
            transition: 'color 0.15s ease',
            '&:hover': { color: '#374151' },
          }}
        >
          Shreya Bali
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.25, alignItems: 'center' }}>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Button
                key={link.text}
                component={Link}
                to={link.path}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.88rem',
                  fontWeight: active ? 600 : 500,
                  px: 1.75,
                  py: 0.75,
                  color: active ? '#111827' : '#374151',
                  borderRadius: '6px',
                  position: 'relative',
                  fontFamily: "'Inter', sans-serif",
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                    color: '#111827',
                  },
                  ...(active && {
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 5,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 18,
                      height: 2,
                      backgroundColor: '#111827',
                      borderRadius: 4,
                    },
                  }),
                }}
              >
                {link.text}
              </Button>
            );
          })}
          <Button
            href="/Shreya_CV_PhD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: 'none',
              fontSize: '0.88rem',
              fontWeight: 600,
              px: 1.75,
              py: 0.75,
              ml: 0.5,
              color: '#ffffff',
              backgroundColor: '#111827',
              borderRadius: '6px',
              fontFamily: "'Inter', sans-serif",
              '&:hover': {
                backgroundColor: '#374151',
              },
            }}
          >
            CV
          </Button>
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#ffffff',
            width: 260,
          },
        }}
      >
        <Box
          sx={{
            px: 3,
            pt: 2.5,
            pb: 2,
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: '"Georgia", serif',
              color: '#111827',
            }}
          >
            Shreya Bali
          </Typography>
        </Box>

        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <ListItem key={link.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={toggleDrawer(false)}
                  sx={{
                    py: 1.25,
                    px: 3,
                    color: active ? '#111827' : '#374151',
                    backgroundColor: active ? '#f3f4f6' : 'transparent',
                    '&:hover': { backgroundColor: '#f3f4f6' },
                  }}
                >
                  <ListItemText
                    primary={link.text}
                    primaryTypographyProps={{
                      fontSize: '0.9rem',
                      fontWeight: active ? 600 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding sx={{ mt: 1.5, px: 2 }}>
            <ListItemButton
              href="/Shreya_CV_PhD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleDrawer(false)}
              sx={{
                py: 1.25,
                px: 2,
                color: '#ffffff',
                backgroundColor: '#111827',
                borderRadius: '6px',
                '&:hover': { backgroundColor: '#374151' },
              }}
            >
              <ListItemText
                primary="Download CV"
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavigationBar;
