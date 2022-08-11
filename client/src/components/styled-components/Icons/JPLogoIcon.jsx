import React from 'react';

function JPLogoIcon({ styles = {} }) {
  return (
    <div
      className='jplogo-background'
      style={{
        backgroundColor: 'var(--menu-icons-color)',
        // backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        height: '42px',
        width: '42px',
        borderRadius: '7px',
        position: 'relative',
        margin: 0,
        ...styles,
      }}
    >
      <div
        className='jplogo-text'
        style={{
          textAlign: 'right',
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '2px 3.25px -2px 0',
          color: 'var(--primary-color)',
          fontFamily: '"Noto Sans JP", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: '23.2px',
          fontWeight: 500,
        }}
      >
        JP
      </div>
    </div>
  );
}

export default JPLogoIcon;
