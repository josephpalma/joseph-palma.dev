import React from 'react';
import { Toolbar, Switch, Container, AppBar, Box } from '@mui/material';
import { LightMode, DarkMode, GitHub, LinkedIn } from '@mui/icons-material';
import links from '../../assets/links.json';
import StackOverflowIcon from './Icons/StackOverflowIcon';
import JPLogoIcon from './Icons/JPLogoIcon';
import Spacer from './Spacer';

function NavBar({ isDarkTheme, changeTheme }) {
  const color = isDarkTheme ? 'secondary' : 'primary';
  const filter = isDarkTheme
    ? { filter: 'invert(1%) sepia(124%) hue-rotate(155deg) brightness(-20%) contrast(147%)', WebkitFilter: 'invert(1%) sepia(124%) hue-rotate(155deg) brightness(1%) contrast(147%)' }
    : { filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(37deg) brightness(373%) contrast(79%)', WebkitFilter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(37deg) brightness(373%) contrast(79%)' };
  document.body.style.setProperty('--menu-icons-color', isDarkTheme ? 'rgba(0,0,0,0.79)' : 'rgba(255,255,255, 0.83)');
  document.body.style.setProperty('--menu-icons-hover-color', isDarkTheme ? 'rgba(0,0,0,0.43)' : '#b3b3b3c2');
  return (
    <div>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Spacer axis="horizontal" size={10} /> <JPLogoIcon /> <Spacer axis="horizontal" size={18} />
            <Switch color={color} checked={isDarkTheme} onChange={changeTheme} className="light-switch" aria-label="dark mode switch" tabIndex={0} />
            <Box component="div" sx={{ flexGrow: 1 }}>
              <div style={{ width: '25px', marginTop: '5px' }}>
                {isDarkTheme === false ? <LightMode /> : <DarkMode className="light-switch-color" color={color} />}
              </div>
            </Box>
            <Box className="menu-icon-box">
              <a title="LinkedIn" href={links.linkedin.url} target="__blank" referrerPolicy="no-referrer" rel="external">
                <LinkedIn className="menu-icons linkedin" alt="LinkedIn Link" aria-label="linkedin link" />
              </a>
              <a title="Github" href={links.github.url} target="__blank" referrerPolicy="no-referrer" rel="external">
                <GitHub className="menu-icons" alt="Github Link" aria-label="github link" />
              </a>
              <a title="Stack Overflow" href={links.stackoverflow.url} className="menu-icons icon-img" target="__blank" referrerPolicy="no-referrer" rel="external">
                <StackOverflowIcon style={filter} alt="Stack Overflow Link" aria-label="stack overflow link" />
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default (NavBar);
