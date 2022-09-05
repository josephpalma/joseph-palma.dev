import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import Spacer from '../../styled-components/Spacer';
import ExperienceInnerHtml from './ExperienceInnerHtml';
import api from '../../../assets/api.json';

const ALLOWED_ATTR = [
  'style',
  'class',
  'type',
  'id',
  'href',
  'rel',
  'aria-label',
  'onClick',
  'alt',
  'loading',
  'src',
  'target',
  'rel',
  'referrerPolicy',
];

const ALLOWED_TAGS = [
  'html',
  'head',
  'style',
  'button',
  'body',
  'a',
  'i',
  'b',
  'title',
  'meta',
  'figure',
  'figcaption',
  'ul',
  'nav',
  'img',
  'li',
  'div',
  'td',
  'p',
  'h4',
  'h5',
  'h3',
  'h6',
];

function ExperienceContent({
  styles = {},
  mobile = false,
  userDesc = '',
  techDesc = '',
  content = undefined,
  handleMore = null,
  readMore = false,
  moreContentSize,
}) {
  const [moreContentHTML, setMoreContentHTML] = useState(null);
  let dev = process.env.NODE_ENV !== 'production';

  useEffect(async () => {
    let data = '';
    let url = dev ? api.dev.moreContent.url : content;
    if ((readMore && content !== undefined) || dev) {
      try {
        const response = await fetch(url);
        data = await response.text();
      } catch (error) {
        console.log('failed to fetch more content');
      }
      setMoreContentHTML(data);
    }
  }, [readMore, content]);

  const outHtml = DOMPurify.sanitize(moreContentHTML, { FORCE_BODY: true, ALLOWED_ATTR, ALLOWED_TAGS });

  const moreContent = (
    <>
      {moreContentHTML !== null ?
        <ExperienceInnerHtml outHtml={outHtml} innerHtml={moreContentHTML} /> :
        <div style={{ textAlign: 'center', padding: '25px' }}>
          <CircularProgress color="primary" />
        </div>
      }
    </>
  );

  const setMoreContentSize = () => {
    if (moreContentSize === 'large') {
      return {
        width: '120%',
        margin: '10px 0 0 -20%',
      };
    }
    if (moreContentSize === 'medium') {
      return {
        width: '115%',
        margin: '10px 0 0 -15%',
      };
    }
    return {};
  };

  return (
    <div
      className={readMore || mobile ? `more-content ${mobile ? 'more-content-mobile' : ''}` : 'less-content'}
      style={readMore ? setMoreContentSize() : {}}
    >
      <section
        className="project-info_description"
        style={mobile ? styles.mobileProjectDescriptionStyle : {}}
        aria-label="Project description"
      >
        {(userDesc.length > 0 && !readMore) ? <p className="project-info_description-text">{userDesc}</p> : <></>}
        {(techDesc.length > 0 && !readMore) ? <p className="project-info_description-text">{techDesc}</p> : <></>}
        {!readMore ? <></> : moreContent}
        {content || dev ?
          <div>
            <Spacer axis="vertical" size={10} />
            <Button
              variant='raised'
              onClick={handleMore}
              className="read-more_button"
              referrerPolicy="no-referrer"
              disableFocusRipple
              disableRipple
              type='button'
              style={!readMore ? styles.readMoreClosedButton : {}}
            >Read {!readMore ? 'More +' : 'Less -' }</Button>
          </div> :
          <></>
        }
      </section>
    </div>
  );
}

export default ExperienceContent;
