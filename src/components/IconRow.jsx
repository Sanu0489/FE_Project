import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Home } from '../assets/images/home.svg';
import { ReactComponent as Building } from '../assets/images/building.svg';
import { ReactComponent as Security } from '../assets/images/security.svg';
import { ReactComponent as Settings } from '../assets/images/settings.svg';

const IconRow = ({ setSelectedIcon, isDarkMode }) => {
  const icons = [
    { src: <Home />, alt: 'Home', id: 'home' },
    { src: <Building />, alt: 'Building', id: 'building' },
    { src: <Security />, alt: 'Security', id: 'security' },
    { src: <Settings />, alt: 'Settings', id: 'settings' }
  ];

  return (
    <div className={`icon-row ${isDarkMode ? 'dark' : 'light'}`}>
      {icons.map(icon => (
        <div
          key={icon.id}
          className={`icon-container ${isDarkMode ? 'dark' : 'light'}`}
        >
          <div
            className={isDarkMode ? 'icon dark' : 'icon light'}
            onClick={() => setSelectedIcon(icon.src)} 
          >
            {icon.src}
          </div>
        </div>
      ))}
    </div>
  );
};

IconRow.propTypes = {
  setSelectedIcon: PropTypes.func.isRequired,
};

export default IconRow;
