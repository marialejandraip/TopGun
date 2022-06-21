import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext';

function Header({setDarkMode, darkMode}) {

  const color = useContext(ThemeContext)

  const handleClick = () => {
    //toggle to change darkmode
    setDarkMode(!darkMode);
  }

  return (
    <div className ="Header">
      <h1 style={{color}}>
        ReactHooks
      </h1>
     <button className='button-mode' type='button' onClick={handleClick}>{darkMode? 'Dark Mode': 'Light Mode'}</button>
    </div>
  )
}

export default Header