import React, { useEffect, useState } from 'react';
import './Style1.css';

const Form11Sample = () => {
    const [theme, setTheme] = useState('light');
    function toggle(){
        setTheme(theme === 'light'? "dark" : "light");
    }

    useEffect(() => {
        document.body.className = theme;
        console.log(document.body.className)
    }, [theme]);

  return (
    <div>
        <div className="heading--container">
            <h2>React JavaScript</h2>
            <button onClick={toggle}>{theme}</button>
        </div>

        <div className={`${theme}`}>
            <div className="content--container">
                <ol>
                    <li>It is easy to manage</li>
                    <li>Faster to build</li>
                    <li>Reusable Components</li>
                    <li>I love JavaScript!</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Form11Sample