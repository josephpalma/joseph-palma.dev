/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import introduction from '../../../assets/introduction.json';
import Spacer from '../../styled-components/Spacer';

function About({ isDarkTheme, setTab }) {
  const [intro, setIntro] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  document.body.style.setProperty('--text-fam', isDarkTheme ? 'San Francisco Light' : 'San Francisco');

  const parseText = (text) => {
    let i = 0; let l = 0; let k = 0;
    let renderables = [];
    let linktext = '';
    let linkurl = '';
    for (i = 0; i < text.length; i += 1) {
      if (text[i] === ' ') {
        renderables.push(text[i]);
        if (text[i + 1] === ';') { // if the next set is a link
          // put linktext into a variable
          let isLinkTextFound = false;
          while (!isLinkTextFound) {
            for (l = i + 2; l < text.length; l += 1) {
              if (text[l] !== ';') {
                linktext = linktext.concat(text[l]);
              } else if (text[l] === ';') {
                isLinkTextFound = true;
                break;
              }
            }
          }
          // put linkurl into a variable
          let isLinkURLFound = false;
          while (!isLinkURLFound) {
            for (k = l + 2; k < text.length; k += 1) {
              if (text[k] !== ';') {
                linkurl = linkurl.concat(text[k]);
              } else if (text[l] === ';') {
                isLinkURLFound = true;
                break;
              }
            }
          }
          // put new link in rendables and update position in string
          renderables.push(
            <a href={linkurl} target="__blank" referrerPolicy="no-referrer" rel="external">
              <div className="hover-underline-animation about-link">
                {linktext}
              </div>
            </a>,
          );
          linkurl = '';
          linktext = '';
          i = k + 1;
        }
      }
      renderables.push(text[i]);
    }

    return renderables;
  };

  useEffect(() => {
    setIntro(parseText(introduction.about.intro));
    setExperience(parseText(introduction.about.experience));
    setSkills(parseText(introduction.about.skills));
    setInterests(parseText(introduction.about.interests));
  }, []);

  return (
    <section
      className="tab-content_container"
      id="_about"
      aria-label="About me"
      style={{ color: isDarkTheme ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}
    >
      <Spacer axis="vertical" size={16} />
      {!intro.length || !experience.length || !skills.length || !interests.length
        ?
          <div className="spinner"><CircularProgress color="primary" /></div>
        :
          <article>
            <Typography as="p" variant="body1">
              {intro.map((item) => item)}
            </Typography>
            <br />
            <Typography as="p" variant="body1">
              {experience.map((item) => item)}
            </Typography>
            <br />
            <Typography as="p" variant="body1">
              {skills.map((item) => item)}
            </Typography>
            <br />
            <Typography as="p" variant="body1">
              {interests.map((item) => item)}
            </Typography>
            <br />
            <Typography as="p" variant="body1">
              Currently I am looking for a role as a front-end Engineer,&nbsp;
              <div
                className="hover-underline-animation about-link"
                style={{ cursor: 'pointer' }}
                onClick={setTab}
                onKeyDown={setTab}
                tabIndex={0}
                role='link'
              >
                feel free to reach out. 👉
              </div>
            </Typography>
          </article>
      }
    </section>
  );
}

export default About;
