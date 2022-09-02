import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Card, CardContent, Divider } from '@mui/material';
import NavBar from './components/styled-components/NavBar';
import NavTabs from './components/styled-components/NavTabs';
import Spacer from './components/styled-components/Spacer';
import Introduction from './components/page-components/Introduction';
import useStickyState from './components/hooks/useStickyState';
import '@fontsource/roboto';
import Skills from './components/page-components/Skills/Skills';
import Jobs from './components/page-components/Jobs/Jobs';
import About from './components/page-components/About/About';
import Resume from './components/page-components/Resume/Resume';
import Experience from './components/page-components/Experience/Experience';
import './styles/app.css';
import useScreenWidth from './components/hooks/useScreenWidth';
import 'animate.css';
import useAnimation from './components/hooks/useAnimation';
import ContactForm from './components/page-components/Contact/ContactForm';
import theme from './assets/theme';
import Footer from './components/styled-components/Footer';
import useWaitForElm from './components/hooks/useWaitForElm';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useStickyState(true, 'themePreference');

  const [tab, setTab] = useStickyState('About', 'tabPreference');
  document.body.style.setProperty('--background', isDarkTheme ? 'rgba(0,0,0,0.0)' : theme.palette.background.light);
  document.body.style.setProperty('--background-gradient', isDarkTheme ? 'rgba(18,18,18,.94)' : '#f7f7f7');
  document.body.style.setProperty('--light-background', isDarkTheme ? theme.palette.background.dark : '#fff');
  document.body.style.setProperty('--title-color', isDarkTheme ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.85)');
  document.body.style.setProperty('--text-color', isDarkTheme ? 'rgba(255,255,255, 0.8)' : 'rgba(0,0,0, 0.99)');
  document.body.style.setProperty('--primary-color', theme.palette.primary.main);
  const screenWidth = useScreenWidth();
  const mobile = screenWidth < 650;
  const tablet = screenWidth < 1000;

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const setTabSelection = (event, newTab) => {
    setTab(newTab);
  };

  const mobileResumeSelect = () => {
    setTab('Contact');
    return null;
  };

  useEffect(async () => {
    const tabContent = await useWaitForElm(`#_${tab.toLowerCase()}`);
    useAnimation(tabContent, 'fadeIn', 0.9);
  }, [tab]);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <Container id="root-component">
        <div className="App">
          <Card className="main-card" as="main">
            <NavBar isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
            <CardContent id="card-content">
              <Introduction isDarkTheme={isDarkTheme} tablet={tablet} />
              <Spacer axis="vertical" size={20} />
              {tablet ? <Divider style={{ backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgb(0,0,0)' }} /> : <Divider style={{ width: '67.6%', marginLeft: '13px', backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgb(0,0,0)' }} />}
              {tablet ? <Divider /> : <Divider style={{ width: '17.2%', float: 'right', marginTop: '-1px', backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgb(0,0,0)' }} />}
              <Spacer axis="vertical" size={2} />
              <NavTabs mobile={mobile} tab={tab} setTab={setTabSelection} isDarkTheme={isDarkTheme} />
              <Container disableGutters className="tab-container">
                {tab === 'Skills' ? <Skills mobile={mobile} screenWidth={screenWidth} isDarkTheme={isDarkTheme} /> : <></>}
                {tab === 'Experience' ? <Jobs mobile={mobile} screenWidth={screenWidth} isDarkTheme={isDarkTheme} /> : <></>}
                {tab === 'About' ? <About isDarkTheme={isDarkTheme} setTab={mobileResumeSelect} /> : <></>}
                {tab === 'Resume' ? <Resume screenWidth={screenWidth} isDarkTheme={isDarkTheme} setTabAfter={mobileResumeSelect} /> : <></>}
                {tab === 'Projects' ? <Experience screenWidth={screenWidth} isDarkTheme={isDarkTheme} /> : <></>}
                {tab === 'Contact' ? <ContactForm screenWidth={screenWidth} isDarkTheme={isDarkTheme} /> : <></>}
              </Container>
            </CardContent>
            <Footer isDarkTheme={isDarkTheme} />
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
