import PropTypes from 'prop-types';
import {ReactComponent as LogonOnly} from '../assets/images/logonOnly.svg';

const TitleBox = ({selectedIcon, isDarkMode}) => {
  console.log('isDarkMode from TitleBox:', isDarkMode);
  const logoSrc = selectedIcon || <LogonOnly/>;
  console.log('logoSrc:', logoSrc);
  return (
    <div className={`title-box ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`titleLogo ${isDarkMode ? 'dark' : 'light'}`}>
        {logoSrc}
      </div>
      <h1 className={isDarkMode ? 'dark' : 'light'}>React UI Project</h1>
    </div>
  );
}

TitleBox.propTypes = {
  selectedIcon: PropTypes.string,
};

export default TitleBox;
