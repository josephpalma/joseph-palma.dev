import React from 'react';
import { CircularProgress } from '@mui/material';
import devApi from '../../../assets/api/develop.api.json';
import prodApi from '../../../assets/api/production.api.json';
import useFetch from '../../hooks/useFetch';
import '../../../styles/experience.css';
import ExperienceItem from './ExperienceItem';
import Spacer from '../../styled-components/Spacer';

function Experience({ isDarkTheme, screenWidth }) {
  let api = process.env.NODE_ENV !== 'production' ? devApi : prodApi;
  const { status, data, error } = useFetch(api.experience.url);

  document.body.style.setProperty('--img-wrapper-shadow', isDarkTheme ? 'drop-shadow(0px -5px 10px rgba(0,0,0,0.7))' : 'drop-shadow(-5px -2px 10px var(--primary-color_strong))');
  document.body.style.setProperty('--img-wrapper-background', isDarkTheme ? 'var(--primary-color_soft)' : 'var(--secondary-color_soft)');
  document.body.style.setProperty('--img-filter', isDarkTheme ? 'grayscale(36%) saturate(121%) brightness(98%)' : 'grayscale(30%) saturate(119%) contrast(104%)');
  document.body.style.setProperty('--experience-color-light', isDarkTheme ? 'var(--primary-color)' : 'rgb(255,255,255, 0.9)');
  document.body.style.setProperty('--experience-color-light', screenWidth > 898 ? 'var(--primary-color)' : 'rgb(255,255,255, 0.9)');
  document.body.style.setProperty('--mono_font-family-light', isDarkTheme ? 'var(--mono_font-family)' : 'JetBrains Mono Medium');
  document.body.style.setProperty('--padding-experiences', screenWidth < 898 ? 'none' : '20px 0 0 0');

  const makeExperiencesList = () => {
    data.sort((a, b) => a.Order - b.Order);
    return (
      <ul className="projects-list">
        {data.map((item) => (
          <ExperienceItem
            title={item.Title}
            techDescription={item.TechnicalDescription}
            userDescription={item.UserDescription}
            stakeholders={item.Stakeholders}
            links={item.Links}
            photo={item.Photo}
            technologies={item.Technologies}
            moreContent={item.MoreContent}
            moreContentSize={item.MoreContentSize}
            screenWidth={screenWidth}
            isDarkTheme={isDarkTheme}
            key={item.Title}
          />
        ))}
      </ul>
    );
  };

  return (
    <section id="_experience" aria-label="My Projects">
      <Spacer axis="vertical" size={14} />
      {status === 'idle' && (<div className="spinner"><CircularProgress color="error" /></div>)}
      {status === 'error' &&
        (<div className='spinner' style={isDarkTheme ? { color: 'rgba(255,255,255,.7)' } : { color: 'rgba(0,0,0.9)' }}>
          <span>error getting data:&nbsp;</span>
          {error}
        </div>)
      }
      {status === 'fetching' && (<div className="spinner"><CircularProgress color="primary" /></div>)}
      {status === 'fetched' && makeExperiencesList()}
    </section>
  );
}

export default Experience;
