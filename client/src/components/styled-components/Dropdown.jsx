import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';
import { GitHub, OpenInBrowser } from '@mui/icons-material';

const dropdownDividerLeft = {
  float: 'left',
  position: 'absolute',
  borderTop: '1x solid rgba(255,255,255,0.2)',
};

const dropdownDividerRight = {
  float: 'right',
  borderTop: '1px solid rgba(255,255,255,0.2)',
};

function Dropdown({ className, primaryText, secondaryText, screenWidth, gitLink, extLink, myKey }) {
  const [isOpen, setIsOpen] = useState(false);

  const splitText = () => {
    let numWords = 5;
    if (screenWidth === 540) { // Surface Duo screen settings
      numWords = 8;
    }
    if (screenWidth < 898 && screenWidth > 740) {
      numWords = 12;
    }
    if (screenWidth < 740 && screenWidth > 600) {
      numWords = 9;
    }
    if (screenWidth < 365) {
      numWords = 5;
    }
    let closedText = primaryText.split(' ').slice(0, numWords);
    closedText.splice(1, 0, ' ');
    closedText.splice(3, 0, ' ');
    closedText.splice(5, 0, ' ');
    closedText.splice(7, 0, ' ');
    closedText.splice(9, 0, ' ');
    closedText.splice(11, 0, ' ');
    closedText.splice(13, 0, ' ');
    closedText.splice(15, 0, ' ');
    closedText.splice(17, 0, ' ');
    closedText.splice(19, 0, ' ');
    closedText.splice(21, 0, ' ');
    closedText.push('...');
    return closedText;
  };

  const setOpen = async () => setIsOpen(!isOpen);

  document.body.style.setProperty('--dropdown-width', `${screenWidth / 1.75}px`);

  return (
    <div className={className}>
      {!isOpen ?
        <div aria-label='closed dropdown' id={`closed-dropdown-${myKey}`}>
          <p className='project-info_description-text closed-dropdown-item'>
            {splitText()}
            <span
              id='dropdown-icon-closed'
              className='arrow'
              aria-label='open dropdown'
              role='button'
              tabIndex={0}
              onKeyDown={() => setOpen(myKey)}
              onClick={() => setOpen(myKey)}
            >
              <KeyboardArrowDownIcon />
            </span>
          </p>
        </div> :
        <div aria-label='open dropdown' id='open-dropdown'>
          <p className='project-info_description-text'>
            <span
              id='dropdown-icon-open'
              className='arrow'
              aria-label='close dropdown'
              role='button'
              tabIndex={0}
              onKeyDown={() => setOpen(myKey)}
              onClick={() => setOpen(myKey)}
            >
              <KeyboardArrowUpIcon />
            </span>
            {primaryText ? <p className='project-info_description-text open-dropdown-item'>{primaryText}</p> : <></>}
            {secondaryText ? <p className='project-info_description-text open-dropdown-item'>{secondaryText}</p> : <></>}
            <ul className="project-info_list links" aria-label="Links to resources">
              <li className="project-info_item links">
                <hr id="dropdown-divider-left" className='dropdown-left' style={dropdownDividerLeft} />
                <Typography variant="h5">
                  <div style={{ height: 'fit-content', marginRight: '20px' }}>
                    {gitLink ? (
                      <a title="Github" href={gitLink} target="__blank" referrerPolicy="no-referrer" rel="external">
                        <GitHub color="primary" className="project-links" style={{ marginRight: '1px' }} />
                      </a>
                    ) : <></>}
                    {extLink ? (
                      <a title="External link" href={extLink} target="__blank" referrerPolicy="no-referrer" rel="external" style={{ display: 'inline-flex' }}>
                        <OpenInBrowser color="primary" className={`project-links ${gitLink ? 'external-link external-link_dropdown' : 'external-link-nogit'}`} />
                      </a>
                    ) : <></>}
                  </div>
                </Typography>
                <hr id="dropdown-divider-right" style={dropdownDividerRight} />
              </li>
            </ul>
          </p>
        </div>
      }
    </div>
  );
}

export default Dropdown;
