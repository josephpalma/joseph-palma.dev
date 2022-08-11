import React from 'react';
import '../../../styles/timeline.css';
import { Container, CircularProgress } from '@mui/material';
import { Timeline } from '@mui/lab';
import api from '../../../assets/api.json';
import useFetch from '../../hooks/useFetch';
import JobTimelineItem from './JobTimelineItem';

function Jobs({ mobile, isDarkTheme }) {
  const { status, data, error } = useFetch(api.jobs.url);
  document.body.style.setProperty('--timeline-item-width', mobile ? '165%' : 'inherit');
  document.body.style.setProperty('--timeline-content-shift', mobile ? 'translate(-1px,-1%)' : 'none');
  document.body.style.setProperty('--timeline-items-shift', mobile ? 'translate(-22px,-1%)' : 'none');
  document.body.style.setProperty('--timeline-separator', mobile ? '-1px 0 0 0' : 'none');
  document.body.style.setProperty('--timeline-text-width', mobile ? '38vw' : '100%');
  document.body.style.setProperty('--timeline-title-width', mobile ? '42vw' : '100%');

  const makeTimeline = (inData) => {
    inData.sort((a, b) => a.Latest - b.Latest);
    return (
      <Timeline
        style={mobile ? { transform: 'translate(-7%, 0)' } : {}}
        position={mobile ? 'inherit' : 'alternate'}
      >
        <Container className="timeline-container" disableGutters>
          {inData.map((item) => {
            return <JobTimelineItem
              company={item.Company}
              position={item.Position}
              timeframe={item.Timeframe}
              latest={item.Latest}
              logoUri={item.LogoUri}
              descriptionOne={item.DescriptionOne}
              descriptionTwo={item.DescriptionTwo}
              descriptionThree={item.DescriptionThree}
              mobile={mobile}
              count={inData.length}
              key={item.Company}
            />;
          })}
        </Container>
      </Timeline>
    );
  };

  return (
    <section id="_jobs" style={mobile ? { marginLeft: '-25px' } : {}} aria-label='My Experience'>
      {status === 'idle' && (<div className="spinner"><CircularProgress color="error" /></div>)}
      {status === 'error' &&
        (<div className='spinner' style={isDarkTheme ? { color: 'rgba(255,255,255,.7)' } : { color: 'rgba(0,0,0.9)' }}>
          <span>error getting data:&nbsp;</span>
          {error}
        </div>)
      }
      {status === 'fetching' && (<div className="spinner"><CircularProgress color="primary" /></div>)}
      {status === 'fetched' && makeTimeline(data)}
    </section>
  );
}

export default Jobs;
