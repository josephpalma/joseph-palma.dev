// https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics

import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category = 'Portfolio') => {
  const eventTracker = (action = 'test action', label = 'test label') => {
    ReactGA.event({ category, action, label });
  };

  return eventTracker;
};

export default useAnalyticsEventTracker;
