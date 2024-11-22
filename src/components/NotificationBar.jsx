import { useState, useEffect } from 'react';

const NotificationBar = ({isDarkMode}) => {
  const [countdown, setCountdown] = useState(6);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000); 
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1); 
      }, 1000);
    }

    if (countdown <= 0) {
      clearInterval(interval); 
      setIsVisible(false); 
    }

    return () => clearInterval(interval);
  }, [isVisible, countdown]);

  return (
    <div className={`notification-bar ${isVisible ? 'visible' : ''} ${isDarkMode ? 'dark' : ''}`}>
      {isVisible && <span id="countdown">Closing in {countdown} seconds</span>}
    </div>
  );
};

export default NotificationBar;
