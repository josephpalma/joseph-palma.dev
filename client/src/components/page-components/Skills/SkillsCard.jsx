import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../../../styles/skills.css';

function SkillsCard({ mobile, index, logo, fontSize, isDarkTheme, name }) {
  const darkBackground = 'rgb(0,0,0)';
  const darkMozBackground = '-moz-linear-gradient(20deg, rgba(18, 18, 18,1) 24%, rgba(39,39,39,1) 58%, rgba(54, 97, 148, 0.5) 100%)';
  const darkWebkitBackground = '-webkit-linear-gradient(20deg, rgba(18, 18, 18,1) 24%, rgba(39,39,39,1) 58%, rgba(54, 97, 148, 0.5) 100%)';
  const darkGradient = 'linear-gradient(20deg, rgba(18, 18, 18,0) 24%, rgba(39,39,39,1) 58%, rgba(54, 97, 148, 0.5) 100%)';
  const darkFilter = 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#616161",GradientType=1)';

  const lightBackground = 'rgb(255,255,255)';
  const lightMozBackground = '-moz-linear-gradient(20deg, rgba(255,255,255,1) 24%, rgba(201,201,201,.8) 58%, rgba(4, 43, 65,0.3679446778711485) 100%)';
  const lightWebkitBackground = '-webkit-linear-gradient(20deg, rgba(255,255,255,1) 24%, rgba(201,201,201,.8) 58%, rgba(4, 43, 65,0.3679446778711485) 100%)';
  const lightGradient = 'linear-gradient(20deg, rgba(255,255,255,1) 24%, rgba(201,201,201,.8) 58%, rgba(4, 43, 65,0.3679446778711485) 100%)';

  const darkDropShadow = 'drop-shadow(0px 0px 5px rgba(255,255,255,0.11))';
  const lightDropShadow = 'drop-shadow(0px 0px 5px rgba(0,0,0,0.19))';

  document.body.style.setProperty('--mobile-margin-left', mobile ? 'auto' : 'inherit');
  document.body.style.setProperty('--mobile-margin-right', mobile ? 'auto' : 'inherit');

  const assignDark = () => {
    document.body.style.setProperty('--master-background', darkBackground);
    document.body.style.setProperty('--master-moz-background', darkMozBackground);
    document.body.style.setProperty('--master-webkit-background', darkWebkitBackground);
    document.body.style.setProperty('--master-gradient', darkGradient);
    document.body.style.setProperty('--master-filter', darkFilter);
    document.body.style.setProperty('--drop-shadow', darkDropShadow);
  };

  const assignLight = () => {
    document.body.style.setProperty('--master-background', lightBackground);
    document.body.style.setProperty('--master-moz-background', lightMozBackground);
    document.body.style.setProperty('--master-webkit-background', lightWebkitBackground);
    document.body.style.setProperty('--master-gradient', lightGradient);
    document.body.style.setProperty('--drop-shadow', lightDropShadow);
  };

  if (isDarkTheme) {
    assignDark();
  } else {
    assignLight();
  }

  return (
    <Card sx={{ width: 160 }} index={index} className="card">
      <CardContent>
        <img src={logo} alt={`${name} logo`} loading="lazy" className="card-image" />
        <Typography
          style={{ fontSize: fontSize ? `${fontSize}px` : '20px', textShadow: 'none' }}
          variant="h1"
          component="div"
          className="card-header"
          color={isDarkTheme ? 'text.light' : 'text.dark'}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
