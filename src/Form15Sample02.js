import React, {useState, useEffect} from 'react'

const Form15Sample02 = () => {
    const [obj, setObj] = useState({value: '', count: 0, old: ''});

    function handleChange(event){
        const {name,value} = event.target;
        setObj(prevObj => {
            return {...prevObj,
                [name] : value
            }
        }
        );
    }

    useEffect(() => {
        setObj(prevObj => ({...prevObj, old : JSON.parse(localStorage.getItem('key1'))}));
    }, [])

    function increment(){
        setObj(prevObj => ({...prevObj,
                count : prevObj.count + 1
        }));
    }

    useEffect(() => {
        localStorage.setItem(`key${obj.count}`, JSON.stringify(obj.value));
    }, [obj.value, obj.count])

    // console.log(JSON.parse(localStorage.getItem('key1')));

  return (
    <div>
        <input type="text" onChange={handleChange} name="value" value={obj.value}/>
        <h2>{obj.value}</h2>
        <button onClick={increment}>{obj.count}</button>
        <h1>{obj.old}</h1>

        
    </div>
  )
}

export default Form15Sample02