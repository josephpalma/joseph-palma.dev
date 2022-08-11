import React from 'react';
import { containedTabsStylesHook } from '@mui-treasury/styles/tabs';
import { Grid, Typography } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import SkillsCard from './SkillsCard';
import '../../../styles/skills.css';

function SkillsRow({ data, isDarkTheme, mobile, screenWidth, title }) {
  const tabsStyles = containedTabsStylesHook.useTabs();
  const mobileShrink = screenWidth < 1380;

  const skillsGrid = () => (
    <div>
      <div className='grid-row' id='scroll-box_wrapper'>
        <Grid className='grid' container spacing={2} columns={{ xs: 6, sm: 8, md: 12 }} id='scroll-box_container' role='list'>
          {data.map((item) => (
            <div className='scroll-box_item' id='scroll-box_item' role='listitem' key={`scroll-box-item-${item.Name}`}>
              <SkillsCard
                isDarkTheme={isDarkTheme}
                name={item.Name}
                logo={item.LogoUri}
                order={item.Order}
                type={item.Type}
                level={item.Level}
                mobile={mobile}
                fontSize={item.FontSize}
                key={item.Name}
              />
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );

  const titleRow = (
    <title style={{ display: 'inline-flex' }}>
      <Typography variant='h4' className='row-title'>{title}</Typography>
      <div className="_">_</div>
    </title>
  );

  return (
    <div className='row' id='scroll-box' aria-label='Horizontal scroll'>
      {screenWidth < 400 && title === 'Frameworks & Technologies' ?
        <Typography variant='h4' className='row-title'>Frameworks & Tech</Typography> : titleRow
      }
      {mobileShrink ? (
        <Tabs
          classes={tabsStyles}
          id='horizontal-scroll-tabs'
          value={0}
          onChange={() => { }}
          variant='scrollable'
          scrollButtons={mobileShrink}
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': {
                opacity: 0,
                width: 1.9,
                bottom: 20,
              },
              '&.MuiTabs-scrollButtons': { bottom: 20 },
              '&.css-145v6pe-MuiButtonBase-root-MuiTabScrollButton-root': {
                cursor: 'auto',
                pointerEvents: 'none',
                color: isDarkTheme ? 'rgba(255,255,255, 0.34)' : 'rgba(0,0,0, 0.84)',
              },
            },
          }}
        >
          {skillsGrid()}
        </Tabs>
      ) : skillsGrid() }
    </div>
  );
}

export default SkillsRow;
