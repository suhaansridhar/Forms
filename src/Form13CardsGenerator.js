import React from 'react';
import './Style13Cards.css';
import {AiFillDelete} from 'react-icons/ai';
import {ImCheckboxUnchecked} from 'react-icons/im'

const Form13CardsGenerator = (props) => {
  return (
    <div className='cards--generator--container'>
        <div>
            <button onClick={() => props.completed(props.id)}><ImCheckboxUnchecked className='check--container'/></button>
            <h2>{props.data}</h2>
        </div>
        <button onClick={() => props.deleteTask(props.id)} className='icon--button'><AiFillDelete className='icon'/></button>
    </div>
  )
}

export default Form13CardsGenerator