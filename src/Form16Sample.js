import React, {useEffect, useState} from 'react'

const Form16Sample = () => {
    const [obj, setObj] = useState({author: '', blog: ''});
    const [value, setValue] = useState('');

    const items = [{...localStorage}];
    console.log(items);

    function handleChange(event){
        setObj(prevObj => ({...prevObj, [event.target.name] : event.target.value}))
    }

    function saveBlogPost(){
        localStorage.setItem(obj.author, JSON.stringify(obj.blog));
    }

  return (
    <div>
        <input type="text" name='author' value={obj.author} onChange={handleChange} placeholder="author"/>
        <input type="text" name='blog' value={obj.blog} onChange={handleChange} placeholder="blog"/>
        <button onClick={saveBlogPost}>Save</button>
        <p>{items.map(item => {
            return <div><h1>{item.author}</h1> <h3>{item.blog}</h3></div>
        })}</p>
    </div>
  )
}

export default Form16Sample