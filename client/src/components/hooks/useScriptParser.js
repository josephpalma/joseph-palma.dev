import { useEffect, useState, useRef } from 'react';

// Parses script tag for use into document.body
// constraint is the number of script tags
const useScriptParser = (text, constraint = 1) => {
  const [data, setData] = useState([]);
  const cache = useRef({});

  const scriptParser = (text) => {
    let i = 0; let l = 0;
    let code = '';

    for (i = 0; i < text.length; i += 1) {
      if (text[i] === '\n') {
        if (
          text[i + 1] === '<' &&
          text[i + 2] === 's' &&
          text[i + 3] === 'c' &&
          text[i + 4] === 'r' &&
          text[i + 5] === 'i' &&
          text[i + 6] === 'p' &&
          text[i + 7] === 't' &&
          text[i + 8] === '>'
        ) {
          let isLinkTextFound = false;
          while (!isLinkTextFound) {
            for (l = i + 9; l < text.length; l += 1) {
              if (text[l] !== '<' && text[l + 1] !== '/') {
                code = code.concat(text[l]);
              } else if (text[l] === '<' && text[l + 1] === '/') {
                isLinkTextFound = true;
                break;
              }
            }
          }
        }
      }
    }
    cache.current[text.substring(1, 25)] = code;
    return code;
  };

  useEffect(() => {
    if (cache.current[text.substring(1, 25)]) {
      return cache.current[text.substring(1, 25)];
    }
    setData(scriptParser(text));
  }, []);

  if (data.length < constraint) {
    return [];
  }

  return data;
};

export default useScriptParser;
