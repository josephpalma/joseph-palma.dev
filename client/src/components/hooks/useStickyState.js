// import React from 'react';
import { useEffect, useState } from 'react';

/*
 * React hook to utilize local storage for a 'sticky' useState
 * @param  {any} defaultValue : value to make sticky
 * @param  {string} key : key to save as
 * @author Josh Comeau https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
*/
function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStickyState;
