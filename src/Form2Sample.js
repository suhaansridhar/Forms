import React from 'react';
import {useState} from 'react';
import "./Style.css";

const Form2Sample = () => {
    const [formData, setFormData] = useState({FirstName: "", LastName: "", isFriendly: true, email: ""});
    function handleChange(event){
        setFormData(prevDataForm => {
            const {name, value, checkbox, checked, type, email} = event.target;
            return {
                ...prevDataForm,
                [name] : type === checkbox ? checked : value
            }
        })
    }

  return (
    <form>
        <div className='form--Container'>
            <div>
                <label htmlFor="FirstName">First Name</label>
                <input type="text" value={formData.FirstName} name="FirstName" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="LastName">Last Name</label>
                <input type="text" value={formData.LastName} name="LastName" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="isFriendly">Are you Friendly?</label>
                <input type="checkbox" id='isFriendly' name='isFriendly' checked={formData.isFriendly}/>
            </div>

        </div>
    </form>
  )
}

export default Form2Sample