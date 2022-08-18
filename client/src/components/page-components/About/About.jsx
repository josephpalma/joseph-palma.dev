import React from 'react';
import { CircularProgress } from '@mui/material';
import Spacer from '../../styled-components/Spacer';
import api from '../../../assets/api.json';
import useFetch from '../../hooks/useFetch';
import AboutContent from './AboutContent';

function About({ isDarkTheme, setTab }) {
  document.body.style.setProperty('--text-fam', isDarkTheme ? 'San Francisco Light' : 'San Francisco');
  const { status, data, error } = useFetch(api.about.url);

  return (
    <section
      className="tab-content_container"
      id="_about"
      aria-label="About me"
      style={{ color: isDarkTheme ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}
    >
      <Spacer axis="vertical" size={16} />
      {status === 'idle' && (<div className="spinner"><CircularProgress color="error" /></div>)}
      {status === 'error' &&
        (<div className='spinner' style={isDarkTheme ? { color: 'rgba(255,255,255,.7)' } : { color: 'rgba(0,0,0.9)' }}>
          <span>error getting data:&nbsp;</span>
          {error}
        </div>)
      }
      {status === 'fetching' && (<div className="spinner"><CircularProgress color="primary" /></div>)}
      {status === 'fetched' && <AboutContent content={data} setTab={setTab} />}
    </section>
  );
}

export default About;
