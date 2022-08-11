import React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import resume from '../page-components/Resume/Joseph Palma Resume.pdf';
import LinkTab from './LinkTab';

const NavTabs = ({ isDarkTheme, tab, setTab, mobile }) => {
  const mobileTabs = (
    <Box style={{ maxWidth: '480px' }} as="nav">
      <Tabs
        value={tab}
        onChange={setTab}
        centered
        variant="scrollable"
        aria-label="Navigation Tabs"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
            '&.MuiTabs-scrollButtons': {
              color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)',
            },
          },
        }}
      >
        <Tab value="About" label="About" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Projects" label="Projects" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Experience" label="Experience" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Skills" label="Skills" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <LinkTab value="Resume" label="Resume" disableRipple href={resume} style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Contact" label="Contact Me" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
      </Tabs>
    </Box>
  );

  const desktopTabs = (
    <Box sx={{ marginLeft: '1%' }} as="nav">
      <Tabs
        textColor={isDarkTheme ? 'inherit' : 'primary'}
        value={tab}
        onChange={setTab}
        centered={window.innerWidth <= 1000}
        aria-label="Navigation Tabs"
      >
        <Tab value="About" label="About" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Projects" label="Projects" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Experience" label="Experience" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Skills" label="Skills" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Resume" label="Resume" disableRipple href={mobile ? resume : null} style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
        <Tab value="Contact" label="Contact Me" disableRipple style={{ color: isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.84)', fontFamily: 'San Francisco' }} />
      </Tabs>
    </Box>
  );

  const renderable = mobile ? mobileTabs : desktopTabs;

  return (renderable);
};

export default NavTabs;
