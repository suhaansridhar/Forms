import React, { useState, useRef, useEffect } from 'react';
import './Style.css';
import Cards from './Cards.js';

const Form4Sample = () => {
    function handleFormData(){
        console.log("first")
    }

    const [formData, setFormData] = useState({firstName: '',lastName: '', email: '', age: '', isFriendly: false, color: '' })

    function handleChange(event){
        setFormData(prevFormData => {
            const {email, lastName, firstName, age, color, name, value, checked, type} = event.target;
            return{
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
            }
        }
        )
    }

    function handleFormData(event){
        event.preventDefault();
        <Cards Data = {formData} />
    }

  return (
    <form onSubmit={handleFormData}>
        <h2 className='heading'>Sample Form</h2>
        <div className='form--container'>
            <label htmlFor="FirstName">First Name:</label>
            <input type="text" value={formData.firstName} onChange={handleChange} name="firstName"/>
            <br />
            <label htmlFor="LastName">Last Name:</label>
            <input type="text" value={formData.lastName} onChange={handleChange} name="lastName"/>
            <br />
            <label htmlFor="age">Age:</label>
            <input type="text" onChange={handleChange} value={formData.age} name="age"/>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="text" value={formData.email} name="email" onChange={handleChange} /><br /><br />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <input type="checkbox" checked={formData.isFriendly} name="isFriendly" id='isFriendly' onChange={handleChange}/>
            <br />
            <br />
            <br />
            <br />
            <select name="color" id="color" value={formData.color} onChange={handleChange}>
                <option value="">-----Select Your Fav Color-----</option>
                <option value="Violet">Violet</option>
                <option value="Indigo">Indigo</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
                <option value="Red">Red</option>
            </select>
        </div><br /><br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form4Sample