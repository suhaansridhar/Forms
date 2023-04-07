import React, {useState, useEffect} from 'react'

const Form15Sample = () => {
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);
    const [old, setOld] = useState('');

    useEffect(() => {
        localStorage.setItem(`key${count}`, JSON.stringify(value));
    }, [count, value]);

    useEffect(() => {
        setOld(localStorage.getItem('key6'));
    }, [])

    function handleChange(event){
        setValue(event.target.value);
    }

  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={() => setCount(count + 1)}>Save</button>
        <p>{old}</p>
    </div>
  )
}

export default Form15Sample