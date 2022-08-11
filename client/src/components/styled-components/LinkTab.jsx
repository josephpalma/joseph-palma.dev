import React from 'react';
import Tab from '@mui/material/Tab';

const LinkTab = (props) => {
  return (
    <Tab component='a' target='_blank' {...props} />
  );
};

export default LinkTab;
