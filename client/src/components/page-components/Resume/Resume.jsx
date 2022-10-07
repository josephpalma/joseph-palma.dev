import React from 'react';
import DesktopResume from './DesktopResume';

const Resume = ({ isDarkTheme, screenWidth, setTabAfter }) => {
  document.body.style.setProperty('--resume-shadow', isDarkTheme ? 'var(--primary-color_soft)' : 'var(--secondary-color_soft');

  let renderable = screenWidth < 720 ? setTabAfter() : <section id="_resume"><DesktopResume width={screenWidth} /></section>;

  return renderable;
};

export default Resume;
