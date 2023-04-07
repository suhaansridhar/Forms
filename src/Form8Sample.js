import React, {useState, useEffect} from 'react';
import Form9Sample from './Form9Sample';

const Form8Sample = () => {
    const [present, setPresent] = useState(true);

    
    return (
        <div>
        <button onClick={() => setPresent(prevState => !prevState)}>Show Tracker</button>
        {present && <Form9Sample />}
    </div>
  )
}

export default Form8Sample