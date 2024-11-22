import { useState, useEffect } from 'react';
import Header from './components/Header';
import TitleBox from './components/TitleBox';
import IconRow from './components/IconRow';
import NotificationBar from './components/NotificationBar';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('');

  console.log('selectedIcon:', selectedIcon);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevState => {
      const newTheme = !prevState ? 'dark' : 'light';
      window.localStorage.setItem('theme', newTheme);
      return !prevState;
    });
  };
   console.log('isDarkMode:', isDarkMode);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`} 
>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className={isDarkMode ? 'pagecontent dark' : 'pagecontent'}>
        <TitleBox selectedIcon={selectedIcon} isDarkMode={isDarkMode} />
        <IconRow setSelectedIcon={setSelectedIcon} isDarkMode={isDarkMode} />
      </div>
      <NotificationBar isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
