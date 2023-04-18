import React, { useContext } from 'react';
import { Theme } from './App';

const Form18Sample03 = () => {
    const theme = useContext(Theme);
    const themeStyle ={
        backgroundColor: theme ? 'black' : 'blue',
        color: theme? 'white' : 'black',
        padding: '1rem',
        width: '250px',
        height: '250px',
        borderRadius: '10px'
    }

  return (
    <div style={themeStyle}>
        <h1>function theme</h1>
    </div>
  )
}

export default Form18Sample03
