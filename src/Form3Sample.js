import React from 'react';
import {useState, useRef}    from 'react';

const Form3Sample = () => {
    const style = {
        border: "0.1rem solid black"
    }
    const input_value_ref = useRef();

    const [array, setArray] = useState([]);
    function toggle(){
        console.log(input_value_ref.current.value)
        // setArray(prevArray => [...prevArray, input_value_ref.current.value])
    }
  return (
    <div>
        <input type="text" style={style} id="adding_element" ref={input_value_ref}/>
        <button onClick={toggle}>Add</button>
        {array.map(item => <p>{item}</p>)}
    </div>
  )
}

export default Form3Sample