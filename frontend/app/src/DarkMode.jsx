import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onChange = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Switch className='m-2' onChange={onChange} />

  );
};
export default App;