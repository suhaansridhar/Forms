import React, {useState} from 'react'

const Form12Sample = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    function handleChange(event){
        setValue(event.target.value);
    }

    function toggle(){
        setList(prevList => [...prevList, value]);
        setValue('');
    }

    let listElements = list.map(item => <h4 key={item}>{item}</h4>);

  return (
    <div>
        <input type="text" onChange={handleChange} value={value}/>
        <button onClick={toggle}>Add</button>
        <br /><br /><br /><br /><br />
        {listElements}
    </div>
  )
}

export default Form12Sample