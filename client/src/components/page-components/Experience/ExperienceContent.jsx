import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import Spacer from '../../styled-components/Spacer';

function ExperienceContent({
  styles = {},
  mobile = false,
  userDesc = '',
  techDesc = '',
  content = undefined,
  handleMore = null,
  readMore = false,
}) {
  const [moreContentHTML, setMoreContentHTML] = useState(null);

  useEffect(async () => {
    let data = '';
    if (readMore && content !== undefined) {
      try {
        const response = await fetch(content);
        data = await response.text();
      } catch (error) {
        console.log('failed to fetch more content');
      }

      setMoreContentHTML(data);
    }
  }, [readMore, content]);

  const moreContent = (
    <>
      {moreContentHTML !== null ?
        <div id='more-content'>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(moreContentHTML) }} />
        </div> :
        <div style={{ textAlign: 'center' }}><CircularProgress color="primary" /></div>
      }
    </>
  );

  return (
    <div className={readMore || mobile ? 'more-content' : 'less-content'}>
      <section
        className="project-info_description"
        style={mobile ? styles.mobileProjectDescriptionStyle : {}}
        aria-label="Project description"
      >
        {userDesc ? <p className="project-info_description-text">{userDesc}</p> : <></>}
        {techDesc ? <p className="project-info_description-text">{techDesc}</p> : <></>}
        {!readMore ? <></> : moreContent}
        {content ?
          <div>
            <Spacer axis="vertical" size={10} />
            <Button
              variant='raised'
              onClick={handleMore}
              className="hover-underline-animation read-more_button"
              referrerPolicy="no-referrer"
              type='button'
              style={!readMore ? styles.readMoreClosedButton : {}}
            >Read {!readMore ? 'More' : 'Less' }</Button>
          </div> :
          <></>
        }
      </section>
    </div>
  );
}

export default ExperienceContent;
