import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SmallIcon from './images/react-icon-small.png'
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const clickHandler = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className="container">
      <Navbar
        image={SmallIcon}
        darkMode={darkMode}
        clickHandler={clickHandler} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
