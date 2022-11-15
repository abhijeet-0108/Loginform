import React from 'react'
import { useState } from 'react';
import {  NavLink } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'


const Forgetpass = () => {
    const data = {password:'',confirmpassword:""};
    const[formValues,setFormValues] = useState(data);
    const[formError,setFormErrors] = useState({});
    const[type,setType]=useState("password");
    const[icon,setIcon]=useState(eyeOff);

    const handleToggle = ()=>{
        if(type==="password"){
          setIcon(eye)
          setType("text")
        }else{
          setIcon(eyeOff)
          setType("password")
        }
       }
    const handleChange = (e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(Validate(formValues))
      }
      const Validate = (values)=>{
        const errors = {}
       if(!values.password){
        errors.password = "Password is Required !"
      }else if(values.password.length<4){
        errors.password = "Password must be more than 4 characters "
      }else if(values.password.length>10){
        errors.password = "Name should be less than 10 characters"
      }
      if(!values.confirmpassword){
        errors.confirmpassword = "Password Confirmation is Required !"
      }else if(values.confirmpassword.length!==values.password.length){
        errors.confirmpassword = "Password Should be Same."
      }
      return errors ;
      }

  return (
    <div className='container'>
      <h1>Reset Your Password</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <input type={type} 
            placeholder='Enter Your Password' 
            name='password' 
            className='input-from'
            value={formValues.password}
            onChange={handleChange}/>
             <span onClick={handleToggle}><Icon icon={icon}/></span>
          </div>
          <p>{formError.password}</p>
          <div>
            <input type='password' 
            placeholder='Confirm Your Password' 
            name='confirmpassword' 
            className='input-from'
            value={formValues.confirmpassword}
            onChange={handleChange}/>
          </div>
          <p>{formError.confirmpassword}</p>
          <div>
            <button className='input-btn'>Submit Password</button>
          </div>
          <div className='navigate'><NavLink to='/' >Login</NavLink></div>
          </form>
    </div>
  )
}

export default Forgetpass