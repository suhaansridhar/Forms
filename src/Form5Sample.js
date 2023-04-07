import React, {useState} from 'react';
import './Style.css';

const Form5Sample = () => {
    const [formData, setFormData] = useState({email: '', password: '', confirmPassword: '', newsletter: false});

    function handleChange(event){
        setFormData(prevFormData => {
            const {email, password, confirmPassword, newsletter, type, name, value, checked, checkbox} = event.target;
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleForm(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            if(formData.newsletter === true){
                alert('You are successfully signed up!')
            }else{
                alert('You must agree to our newsletter');
            }
        }else{
            alert('Your passwords do not match');
        }
    }

  return (
    <form onSubmit={handleForm}>
        <div className='form--container'>
            <label htmlFor="email">Email: </label>
            <input type="text" onChange={handleChange} name='email' value={formData.email}/><br />
            <label htmlFor="password">Password:</label>
            <input type="text" onChange={handleChange} name='password' value={formData.password}/><br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="text"onChange={handleChange} name='confirmPassword' value={formData.confirmPassword} /><br />
            <input type="checkbox" onChange={handleChange} checked={formData.newsletter} name='newsletter' id='newsletter'/>
            <label htmlFor="newsletter">I agree to the terms and would love to sign up!</label><br /><br />
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default Form5Sample