import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { GitHub, OpenInBrowser } from '@mui/icons-material';
import '../../../styles/experience.css';
import Dropdown from '../../styled-components/Dropdown';
import ExperienceContent from './ExperienceContent';

let mobileProjectItemStyle = null;
let mobileProjectPhotoWrapperStyle = null;
let mobileProjectInfoWrapperStyle = null;
let mobileProjectDescriptionStyle = null;
let mobileProjectTechnologiesStyle = null;

const mobileStyles = {
  projectItem: {
    textAlign: 'center',
    grid: 'none',
    margin: '0',
  },
  projectPhotoWrapper: {
    display: 'none',
  },
  projectInfoWrapper: {
    transform: 'none',
    margin: '0 auto 0 auto',
  },
  projectInfoDescription: {
    width: '100%',
    marginTop: '-16px',
    padding: '5px',
  },
  projectInfoTechnologies: {
    width: '80%',
    paddingLeft: '2%',
    margin: 'auto',
  },
};

function ExperienceItem({
  screenWidth,
  isDarkTheme,
  links,
  title,
  photo,
  stakeholders,
  techDescription,
  userDescription,
  technologies,
  moreContent,
  moreContentSize,
}) {
  const [readMore, setReadMore] = useState(false);

  const setStyles = () => {
    mobileProjectItemStyle = mobileStyles.projectItem;
    mobileProjectPhotoWrapperStyle = mobileStyles.projectPhotoWrapper;
    mobileProjectInfoWrapperStyle = mobileStyles.projectInfoWrapper;
    mobileProjectTechnologiesStyle = mobileStyles.projectInfoTechnologies;
    mobileProjectDescriptionStyle = mobileStyles.projectInfoDescription;
    return {
      mobileProjectItemStyle, mobileProjectPhotoWrapperStyle, mobileProjectInfoWrapperStyle, mobileProjectTechnologiesStyle, mobileProjectDescriptionStyle,
    };
  };

  const getExternalLink = () => {
    const link = (
      <a title="External link" href={links[0].External} target="__blank" referrerPolicy="no-referrer" rel="external" className={`links-tag ${links[0].Github ? '' : 'external'}`}>
        <OpenInBrowser color="primary" className="project-links project-links_desktop external-link" />
      </a>
    );
    const spacer = <></>;
    if (links[0].External) {
      return link;
    }
    return spacer;
  };

  const getGithubLink = () => {
    const link = (
      <a title="Github" href={links[0].Github} target="__blank" referrerPolicy="no-referrer" rel="external" className={`links-tag ${links[0].External ? 'git' : ''}`}>
        <GitHub color="primary" className="project-links project-links_desktop" style={{ marginRight: '1px' }} />
      </a>
    );
    const spacer = <></>;
    if (links[0].Github) {
      return link;
    }
    return spacer;
  };

  const handleMore = () => { setReadMore(!readMore); };

  const mobile = screenWidth < 898;
  setStyles();

  return (
    <section aria-label="Project">
      <li className="project-item" style={mobile ? mobileProjectItemStyle : {}}>
        {/* IMAGE */}
        <div
          className={`project-photo_wrapper ${readMore ? 'project-photo_wrapper_read-more' : ''}`}
          style={mobile ? mobileProjectPhotoWrapperStyle : {}}
        >
          <a href={links[0].External} rel="external" target="__blank" referrerPolicy="no-referrer">
            <img src={photo} alt="app screenshot" loading="lazy" id="project-photo" />
          </a>
        </div>
        <div className="project-info_wrapper" style={mobile ? mobileProjectInfoWrapperStyle : {}}>
          <div className="project-info_top-content">
            {/* TITLE AND LINKS - DESKTOP VIEW */}
            {!mobile ? (
              <ul className="project-info_list links">
                <li className="project-info_item links">
                  <Typography variant="h5">
                    <div>{getGithubLink()} {getExternalLink()}</div>
                  </Typography>
                </li>
              </ul>) : <></>
            }
            {/* TITLE - MOBILE VIEW */}
            <Typography variant="h4" className="title project-info_title">
              {title}
            </Typography>
            {/* STAKEHOLDERS */}
            {stakeholders ? <ul className="project-info_list stakeholders">
              {stakeholders.map((item, index) => {
                let last = (index === stakeholders.length - 1);
                return (
                  <li className={last ? 'project-info_item stakeholders last' : 'project-info_item stakeholders'} key={item.trim()}>
                    <Typography variant="h5" className="stakeholder" style={{ fontWeight: isDarkTheme ? 'lighter' : '400' }}>
                      <div>{item.trim()}</div>
                      <div>{!last ? <div>,&nbsp;</div> : <></>}</div>
                    </Typography>
                  </li>
                );
              })}
            </ul> : <></>}
          </div>
          {/* DESCRIPTIONS */}
          {mobile ?
            <Dropdown
              className={mobile ? 'project-info_description project-info_description-mobile' : 'project-info_description'}
              primaryText={userDescription}
              secondaryText={techDescription}
              screenWidth={screenWidth}
              myKey={title}
              gitLink={links[0].Github}
              extLink={links[0].External}
              addContent={{
                content: moreContent,
                handleMore: () => handleMore(),
                readMore,
                mobile,
                styles: setStyles(),
              }}
            /> :
            <ExperienceContent
              styles={setStyles()}
              mobile={mobile}
              userDesc={userDescription}
              techDesc={techDescription}
              content={moreContent}
              handleMore={handleMore}
              moreContentSize={moreContentSize}
              readMore={readMore}
            />
          }
          {/* TECHNOLOGIES */}
          <ul className="project-info_list technologies" style={mobile ? mobileProjectTechnologiesStyle : {}}>
            {technologies.map((item) => (
              <li className="project-info_item" key={item.trim()}>
                <Typography variant="h6" className="technology-titles">
                  <div>
                    {item.trim()}&nbsp;&nbsp;
                  </div>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </section>
  );
}

export default ExperienceItem;
