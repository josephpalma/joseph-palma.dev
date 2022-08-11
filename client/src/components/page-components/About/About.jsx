import React from 'react';
import { Typography } from '@mui/material';
import introduction from '../../../assets/introduction.json';
import links from '../../../assets/links.json';
import Spacer from '../../styled-components/Spacer';

function About({ isDarkTheme }) {
  return (
    <section
      className="tab-content_container"
      id="_about"
      aria-label="About me"
      style={{ color: isDarkTheme ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}
    >
      <Spacer axis="vertical" size={16} />
      <Typography as="p" variant="body1" style={{ display: 'inline' }}>
        A recent {introduction.about.degree} graduate from the&nbsp;
        <a href={links.manoa.url} target="__blank" referrerPolicy="no-referrer" rel="external">
          <div className="hover-underline-animation about-link">
            {introduction.about.education}
          </div>
        </a>
        . I&apos;ve had the opportunity to intern with organizations like&nbsp;
        <a href={links.nsin.url} target="__blank" referrerPolicy="no-referrer" rel="external">
          <div className="hover-underline-animation about-link">
            {introduction.about.internships.nsin}
          </div>
        </a>
        &nbsp;and&nbsp;
        <a href={links.ameresco.url} target="__blank" referrerPolicy="no-referrer" rel="external">
          <div className="hover-underline-animation about-link">
            {introduction.about.internships.ameresco}
          </div>
        </a>
        , and get involved in the design, planning and execution of the 2022 Hawaiians in Tech Hackathon.
      </Typography>

      <Spacer axis="vertical" size={12} />
      <Typography as="p" color={isDarkTheme ? 'text.light' : 'text.dark'} variant="body1" className="intro-header_text">
        Currently, I am looking for an {introduction.title.position} position as a {introduction.title.fields}.
      </Typography>

      <Spacer axis="vertical" size={12} />
      <Typography as="p" variant="body1">
        {introduction.about.extra}
      </Typography>
    </section>
  );
}

export default About;
