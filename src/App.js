import React, { createContext, useState } from 'react';
import Form18Sample01 from './Form18Sample01'

export const Theme = createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggle(){
    setDarkTheme(prevState => !prevState);
  }

  const buttonStyle = {
    backgroundColor : darkTheme ? 'black' : 'blue',
    color: darkTheme ? 'white' : 'black'
  }

  return (
    <Theme.Provider value={darkTheme}>
      <Form18Sample01 />
      <button onClick={toggle} style={buttonStyle}>clickme</button>
    </Theme.Provider>
  )
}

export default App
