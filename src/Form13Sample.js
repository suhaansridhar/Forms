import React, { useState } from 'react'
import Form13CardsGenerator from './Form13CardsGenerator';
import './Style13Cards.css';

const Form13Sample = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
   
    function addTask(){
        value.length === 0 ? alert("Task is Empty") : setList(prevList => [...prevList, value]);
        setValue('')
    }
    
    function handleChange(event){
        setValue(event.target.value);
    }

    function deleteTask(id){
        setList(prevList => prevList.filter(task => task !== id));
    }

    function completedTaskFunction(id){
        console.log('clicked');
        //how to scratch a list and move it under completed tasks?
        //how to use useeffect?
    }
    
    const listElements = list.map(item =>
         <Form13CardsGenerator data={item} key={item} deleteTask = {deleteTask} id={item} completed = {completedTaskFunction}/>);

    const completedTasksList = completedTask.map(item => item);

  return (
    <div className='container'>
        <h2>TO-DO Tracker</h2>
        <div className="input--container">
            <input type="text" onChange={handleChange} value={value} maxLength={15}/>
            <button onClick={addTask}>Add</button>
        </div>
        <br /><br /><hr /><br /><br />
        {listElements}
        <br /><br /><hr />
        <h3 className='completed-tasks--heading'>Completed Tasks</h3>
        {completedTasksList}
    </div>
  )
}

export default Form13Sample