// components/NavigationBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Research Projects', path: '/research' },
    { text: 'Work Experience', path: '/industry' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <a href="https://drive.google.com/file/d/1g4r751tu2PvQMSuRgOB01DxVt45GYTFp/view?usp=sharing">
            Resume
          </a>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}> {/* Show buttons only on larger screens */}
          {navLinks.map((link) => (
            <Button key={link.text} color="inherit" component={Link} to={link.path} sx={{ textTransform: 'none' }}>
              {link.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
      
      {/* Drawer for smaller screens */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton component={Link} to={link.path} onClick={toggleDrawer(false)}>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavigationBar;
