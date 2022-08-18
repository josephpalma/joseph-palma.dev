import React from 'react';
import { Laptop } from '@mui/icons-material';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import { Typography } from '@mui/material';
import '../../../styles/timeline.css';
import '../../../styles/app.css';
import useLinkParser from '../../hooks/useLinkParser';

function JobTimelineItem({
  latest,
  count,
  timeframe,
  isDarkTheme,
  position,
  company,
  logoUri,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
}) {
  const descriptionOneText = descriptionOne ? useLinkParser(descriptionOne, 5) : '';
  const descriptionTwoText = descriptionTwo ? useLinkParser(descriptionTwo, 5) : '';
  const descriptionThreeText = descriptionThree ? useLinkParser(descriptionThree, 5) : '';
  const first = latest <= 1;
  const last = latest >= count;
  let oppositeStyle = '';

  if (first) {
    oppositeStyle = 'date date-align_first';
  } else if (last) {
    oppositeStyle = 'date date-align_last';
  } else {
    oppositeStyle = 'date';
  }

  return (
    <TimelineItem className="timeline-item">
      <TimelineOppositeContent variant="body2" color="text.secondary" className={oppositeStyle}>
        {timeframe}
      </TimelineOppositeContent>

      <TimelineSeparator style={last ? { transform: 'translate(0,-33%)' } : {}}>
        {first ? <></> : <TimelineConnector />}
        <TimelineDot color="primary">
          <Laptop />
        </TimelineDot>
        {last ? <></> : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent sx={{ py: '12px', px: 2 }} className="timeline-content">
        <Typography variant="h5" color={isDarkTheme ? 'text.secondary' : 'text.primary'} className="title timeline-title">
          {position}
        </Typography>
        <Typography variant="h6" className="subtitle" color="primary">
          <a href={logoUri} target="__blank" referrerPolicy="no-referrer" rel="external">
            <div className="hover-underline-animation about-link timeline_link">{company}</div>
          </a>
        </Typography>
        <ul className="description-list">
          { descriptionOne ? (
            <li className="description-list_item">
              <Typography className="description-point">&gt;</Typography>
              <div className="description-text">
                {' '}
                {descriptionOneText}
              </div>
            </li>
          ) : <></>}
          { descriptionTwo ? (
            <li className="description-list_item">
              <Typography className="description-point">&gt;</Typography>
              <div className="description-text">
                {' '}
                {descriptionTwoText}
              </div>
            </li>
          ) : <></>}
          { descriptionThree ? (
            <li className="description-list_item">
              <Typography className="description-point">&gt;</Typography>
              <div className="description-text">
                {' '}
                {descriptionThreeText}
              </div>
            </li>
          ) : <></>}
        </ul>
      </TimelineContent>
    </TimelineItem>
  );
}

export default JobTimelineItem;
