import React from 'react';
import { Typography } from '@mui/material';
import introduction from '../../assets/introduction.json';
import '../../styles/introduction.css';
import Spacer from '../styled-components/Spacer';

function Introduction({ isDarkTheme, tablet }) {
  const theme = isDarkTheme ? 'primary' : 'secondary';
  return (
    <div className="intro-grid animate__animated animate__bounceInDown">
      <div>
        <Spacer axis="vertical" size={4} />
        <div className="intro-headers">
          <Typography variant="h6" component="h6" color={isDarkTheme ? 'text.light' : 'text.dark'} className="header" style={{ display: 'inline', lineHeight: '50px' }}>
            Aloha,
          </Typography>
          <Typography variant="h6" component="h6" color={isDarkTheme ? 'text.light' : 'text.dark'} className="header" style={{ display: 'inline', lineHeight: '50px' }}>
              &nbsp;my name is&nbsp;
          </Typography>
          <Typography variant="h6" component="h6" className="header header-text" color='primary' style={{ display: 'inline', lineHeight: '50px' }}>
            {introduction.title.name}
          </Typography>
        </div>
        {tablet ? (
          <div className="img-box">
            <div className="img-overlay">
              <img src="https://storage.googleapis.com/portfolio-assets-bucket/headshot-filter-3.png" alt="My Headshot" loading="lazy" width="140px" height="180px" style={{ borderRadius: '9999px' }} />
            </div>
          </div>
        ) : <></>}
        <Spacer axis="vertical" size={12} />
        <Typography color={isDarkTheme ? 'text.light' : 'text.dark'} variant="body1" style={{ fontSize: isDarkTheme ? '16px' : '16.5px' }} className="intro-header_text">
          I am a&nbsp;
        </Typography>
        <Typography variant="body1" color={theme} style={{ fontSize: isDarkTheme ? '16px' : '16.5px' }} className="intro-header_text">
          {introduction.title.occupation}&nbsp;
        </Typography>
        <Typography color={isDarkTheme ? 'text.light' : 'text.dark'} variant="body1" style={{ fontSize: isDarkTheme ? '16px' : '16.5px' }} className="intro-header_text">
          {introduction.intro.location}&nbsp;
        </Typography>
      </div>
      {tablet === false ? (
        <div className="img-box">
          <img src="https://storage.googleapis.com/portfolio-assets-bucket/headshot-filter-3.png" alt="My Headshot" loading="lazy" width="140px" height="180px" style={{ borderRadius: '9999px', opacity: 0.91 }} />
        </div>
      ) : <></>}
    </div>
  );
}

export default Introduction;
