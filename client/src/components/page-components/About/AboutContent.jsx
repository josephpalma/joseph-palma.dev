import React from 'react';
import { Typography, CircularProgress } from '@mui/material';
import useLinkParser from '../../hooks/useLinkParser';
import introduction from '../../../assets/introduction.json';

function AboutContent({ content, setTab }) {
  const intro = useLinkParser(content[0].intro, 20);
  const experience = useLinkParser(content[0].experience, 20);
  const skills = useLinkParser(content[0].skills, 20);
  const interests = useLinkParser(content[0].interests, 20);

  return (
    <div>
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
              Currently, I am looking for an {introduction.title.level} level position
              as a {introduction.title.position} Engineer,&nbsp;
              <div
                className="hover-underline-animation about-link"
                style={{ cursor: 'pointer' }}
                onClick={setTab}
                onKeyDown={setTab}
                tabIndex={0}
                role='link'
              >
                feel free to reach out.
              </div> 👉
            </Typography>
          </article>
      }
    </div>
  );
}

export default AboutContent;
