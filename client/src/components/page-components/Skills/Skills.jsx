import { Container, CircularProgress } from '@mui/material';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import devApi from '../../../assets/api/develop.api.json';
import prodApi from '../../../assets/api/production.api.json';
import '../../../styles/skills.css';
import SkillsRow from './SkillsRow';
import Spacer from '../../styled-components/Spacer';

function Skills({ mobile, screenWidth, isDarkTheme }) {
  let api = process.env.NODE_ENV !== 'production' ? devApi : prodApi;
  const { status, data, error } = useFetch(api.skills.url);

  const makeLists = (inData) => {
    const tools = inData.filter((item) => item.Type.toLowerCase() === 'tool');
    tools.sort((a, b) => a.Order - b.Order);

    const languages = inData.filter((item) => item.Type.toLowerCase() === 'language');
    languages.sort((a, b) => a.Order - b.Order);

    const frameworks = inData.filter((item) => item.Type.toLowerCase() === 'framework');
    const languagesAndFrameworks = frameworks.concat(inData.filter((item) => item.Type.toLowerCase() === 'technology'));
    languagesAndFrameworks.sort((a, b) => a.Order - b.Order);

    return (
      <>
        <Spacer axis='vertical' size={20} />
        <SkillsRow data={languagesAndFrameworks} title='Frameworks & Technologies' mobile={mobile} screenWidth={screenWidth} isDarkTheme={isDarkTheme} />
        <SkillsRow data={languages} title='Languages' mobile={mobile} screenWidth={screenWidth} isDarkTheme={isDarkTheme} />
        <SkillsRow data={tools} title='Tools' mobile={mobile} screenWidth={screenWidth} isDarkTheme={isDarkTheme} />
      </>
    );
  };

  return (
    <section className='skills-page' id='_skills' aria-label='My Skills'>
      <Container disableGutters maxWidth='false' className='container'>
        {status === 'idle' && (<div className='spinner'><CircularProgress color='error' /></div>)}
        {status === 'error' &&
          (<div className='spinner' style={isDarkTheme ? { color: 'rgba(255,255,255,.7)' } : { color: 'rgba(0,0,0.9)' }}>
            <span>error getting data:&nbsp;</span>
            {error}
          </div>)
        }
        {status === 'fetching' && (<div className='spinner'><CircularProgress color='primary' /></div>)}
        {status === 'fetched' && makeLists(data)}
      </Container>
    </section>
  );
}

export default Skills;
