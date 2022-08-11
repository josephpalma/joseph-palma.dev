import { useState, useEffect } from 'react';

/*
 * React hook to detect changing screen widths
*/
function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width;
}

export default useScreenWidth;
