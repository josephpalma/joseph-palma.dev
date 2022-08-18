import React from 'react';
import { Toolbar, Container, AppBar, Box, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import links from '../../assets/links.json';
import StackOverflowIcon from './Icons/StackOverflowIcon';

function Footer({ isDarkTheme }) {
  const style = isDarkTheme
    ? { filter: 'invert(1%) sepia(124%) hue-rotate(155deg) brightness(-20%) contrast(147%)',
      WebkitFilter: 'invert(1%) sepia(124%) hue-rotate(155deg) brightness(1%) contrast(147%)',
      transform: 'translateY(8.41px)' }
    : { filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(37deg) brightness(373%) contrast(79%)',
      WebkitFilter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(37deg) brightness(373%) contrast(79%)',
      transform: 'translateY(8.41px)' };

  const year = new Date(Date.now()).getFullYear();

  return (
    <AppBar position="inherit" color="primary" id="footer" component="footer" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="footer-toolbar">
          <Typography color={isDarkTheme ? 'text.dark' : 'text.light'} variant="body1" className="footer-text">
            &copy;{year} Joseph Palma | Thanks for visiting
          </Typography>
          <Box className="footer-links">
            <a
              title="LinkedIn"
              href={links.linkedin.url}
              target="__blank"
              referrerPolicy="no-referrer"
              rel="external"
            >
              <LinkedIn className="menu-icons linkedin" alt="LinkedIn Link" />
            </a>
            <a
              title="Github"
              href={links.github.url}
              target="__blank"
              referrerPolicy="no-referrer"
              rel="external"
            >
              <GitHub className="menu-icons" style={{ transform: 'translateY(-1px)' }} alt="Github Link" />
            </a>
            <a
              title="Stack Overflow"
              href={links.stackoverflow.url}
              className="menu-icons icon-img"
              target="__blank"
              referrerPolicy="no-referrer"
              rel="external"
            >
              <StackOverflowIcon style={style} width={4.7} height={4.8} alt="Stack Overflow Link" />
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default (Footer);
