import React, {useEffect, useState} from 'react';
import './Style.css';

const Form10Sample = () => {
    const [theme, setTheme] = useState('light');
    function toggle(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        console.log(theme);
    }, [theme])

  return (
    <div className={`${theme}`}>
        <button onClick={toggle} className={`${theme}`}>{theme}</button>
    </div>
  )
}

export default Form10Sample