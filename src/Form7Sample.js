import React, {useState, useEffect} from 'react';

const Form7Sample = () => {
    const [data, setData] = useState('');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then(res => res.join())
        .then(data => setData(data))
        .catch(() => console.log("failed"))
    }, [counter]);

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(prev => prev + 1)}>Add</button>
        <p>{data}</p>
    </div>
  )
}

export default Form7Sample