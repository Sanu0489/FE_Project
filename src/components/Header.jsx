
import PropTypes from 'prop-types';
import {ReactComponent as WidgetsInc} from '../assets/images/widgetsInc.svg';
import toggleOn from '../assets/images/toggleOn.svg';
import toggleOff from '../assets/images/toggleOff.svg';
import '../App.css';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className={isDarkMode ? 'dark' : 'light'}>
      <div className="logo-container">
      <WidgetsInc className={`logo ${isDarkMode ? 'dark' : 'light'}`} />
      </div>
      <div className="toggle-container">
        <span id="toggleLabel">{isDarkMode ? 'Darkmode On' : 'Darkmode Off'}</span>
        <img
          id="toggle"
          src={isDarkMode ? toggleOn : toggleOff}
          alt="Toggle"
          className="toggle"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}


Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header;
