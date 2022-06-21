import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TopGunLabMessage from './components/topgun-lab-message/index';
import Counter from './components/topgun-lab-message/Counter';
import Characters from './components/Characters';
import Reference from './components/Reference';
import getUser from './api/users';
import Stopwatch from './components/stopwatch/index';


function App() {
  const [user, setUser] = useState({name: ''})

  useEffect(() => {
   getUser().then(user => setUser(user));
  }, [])
  

  

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark-theme App' : 'light-theme App'}>
      <header className="App-header">
      <Header  setDarkMode={setDarkMode} darkMode={darkMode}/>
      </header>
        <TopGunLabMessage message ="Holi"/>
        <TopGunLabMessage message ={user.name}/>
      <Counter />
      <Reference />
      <Stopwatch />
      <div className='container-cards'>
        <Characters />
      </div>
    </div>
  );
}

export default App;
