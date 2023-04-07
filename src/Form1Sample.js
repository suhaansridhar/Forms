import React from 'react';
import {useState}  from 'react';

const Form1Sample = () => {

  const [formData, setFormData] = useState({FirstName: "", LastName: "", email: "", comments: "", isFriendly: true});

  function handleClick(event){
    setFormData(prevFormData => {
      const {name, value, type, checked} = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
    console.log(formData.FirstName, formData.LastName, formData.email, formData.comments)
  }



  return (
    <div>
      <label htmlFor="FirstName">First Name:</label>
      <input type="text" placeholder='First Name' name='FirstName' maxLength="20" onChange={handleClick} value={formData.FirstName} id="FirstName"/>
      <input type="text" placeholder='Last Name' name='LastName' maxLength="20" onChange={handleClick} value={formData.LastName}/>
      <input type="text" placeholder='Email' name='email' maxLength="30" onChange={handleClick} value={formData.email}/>
      <textarea name="comments" id="" cols="30" rows="10" placeholder='comments' onChange={handleClick}></textarea>
      <input type="checkBox" id='isFriendly' checked={formData.isFriendly} onChange={handleClick} name="isFriendly"/>
    </div>
  )
}

export default Form1Sample