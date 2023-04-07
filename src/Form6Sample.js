import React, {useState} from 'react';
import Cat from './Cat03.jpg';
import './Style.css';

const Form6Sample = () => {
    const [liners, setLiners] = useState({topText: '', bottomText: ''});
    const [list, setList] = useState(['Things 1', 'Things2']);
    function updateList(event){
        event.preventDefault();
        setList(prevList => {
            return [...prevList, `Things ${list.length + 1}`];
        })
    }

    const listElements = list.map(item => item);

    function handleChange(event){
        const {topText, bottomText, name, value} = event.target;
        setLiners(prevState => {
            return {
            ...prevState,
                [name] : value
        }})
    }

  return (
    <form>
        <input type="text" placeholder='Top Text' onChange={handleChange} value={liners.topText} name='topText'/>
        <input type="text" placeholder='Bottom Text' onChange={handleChange} value={liners.bottomText} name='bottomText'/>
        <img src={Cat} alt="cat" className='image--container'/>
        <h3 className='topText'>{liners.topText}</h3>
        <h3 className='bottomText'>{liners.bottomText}</h3>
        {listElements}
        <button onClick={updateList}>ADD</button>
    </form>
  )
}

export default Form6Sample