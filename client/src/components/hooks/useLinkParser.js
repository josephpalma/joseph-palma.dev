import React, { useEffect, useState } from 'react';

// Parses string with links into renderable elements
// constraint is the number of links. provide this value to prevent premature rendering
const useLinkParser = (text, constraint = 1) => {
  const [data, setData] = useState([]);

  const linkParser = (text) => {
    let i = 0; let l = 0; let k = 0;
    let renderables = [];
    let linktext = '';
    let linkurl = '';

    for (i = 0; i < text.length; i += 1) {
      if (text[i] === ' ') {
        renderables.push(text[i]);

        if (text[i + 1] === ';') { // if the next set is a link
        // put linktext into a variable
          let isLinkTextFound = false;
          while (!isLinkTextFound) {
            for (l = i + 2; l < text.length; l += 1) {
              if (text[l] !== ';') {
                linktext = linktext.concat(text[l]);
              } else if (text[l] === ';') {
                isLinkTextFound = true;
                break;
              }
            }
          }
          // put linkurl into a variable
          let isLinkURLFound = false;
          while (!isLinkURLFound) {
            for (k = l + 1; k < text.length; k += 1) {
              if (text[k] !== ';') {
                linkurl = linkurl.concat(text[k]);
              } else if (text[l] === ';') {
                isLinkURLFound = true;
                break;
              }
            }
          }
          // put new link in rendables and update position in string
          renderables.push(
            <a href={linkurl} target="__blank" referrerPolicy="no-referrer" rel="external">
              <div className="hover-underline-animation about-link">
                {linktext}
              </div>
            </a>,
          );
          linkurl = '';
          linktext = '';
          i = k + 1;
        }
      }
      renderables.push(text[i]);
    }
    return renderables;
  };

  useEffect(() => {
    setData(linkParser(text));
  }, []);

  if (data.length < constraint) {
    return [];
  }

  return data;
};

export default useLinkParser;
