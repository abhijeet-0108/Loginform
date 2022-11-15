import React from 'react'
import { NavLink} from "react-router-dom"
import { useState } from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

const About = () => {
  const data = {name:'',lastname:'',email:'',password:'',confirmpassword:"",number:"",address:"",state:"",gender:""};
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
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.name){
    errors.name = "Name is Required !"
  }else if(values.name.length>10){
    errors.name = "Name should be less than 10 characters"
  }
  if(!values.lastname){
    errors.lastname = "Last Name is Required !"
  }
  if(!values.email){
    errors.email = "Email is Required !"
  }else if(!regex.test(values.email)){
    errors.email = "Email is Not Valid !"
  }
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
  if(!values.number){
    errors.number="Contact Is Required !"
  }else if(values.number.length>10){
    errors.number="Enter a Valid Number"
  }else if(values.number.length<8){
    errors.number="Enter a Valid Number"
  }
  if(!values.gender){
    errors.gender="Gender Is Required !"
  }
  if(!values.state){
    errors.state="State Is Required !"
  }
  if(!values.address){
    errors.address="Address Is Required !"
  }else if(values.address.length<=5){
    errors.address = "Enter a Valid Address."
  }


   return errors ;
  }
  return (
    <div>
      <div className='navigate'><NavLink to='/' >Login</NavLink></div>
      {Object.keys(formError).length === 0  ?(
        <div className="ui">Welcome {formValues.name} You are Registered successfully</div>
      ) : (""
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      
        <form className='container' onSubmit={handleSubmit}>
          <h1>New User Registration</h1>
          <div>
            <input type='text' 
            placeholder='Enter Your Name' 
            name='name' 
            className='input-from' 
            value={formValues.name}
            onChange={handleChange}/>
          </div>
          <p>{formError.name}</p>
          <div>
            <input type='text' 
            placeholder='Enter Your Last Name' 
            name='lastname' 
            className='input-from' 
            value={formValues.lastname}
            onChange={handleChange}/>
          </div>
          <p>{formError.lastname}</p>
          <div>
            <input type='text' 
            placeholder='Enter Your Email' 
            name='email' 
            className='input-from'
            value={formValues.email}
            onChange={handleChange}/>
          </div>
          <p>{formError.email}</p>
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
            <input type='number' 
            placeholder='Enter Your Number' 
            name='number' 
            className='input-from'
            value={formValues.number}
            onChange={handleChange}/>
          </div>
          <p>{formError.number}</p>
          <div>
            <input type='textarea' 
            placeholder='Enter Your Address' 
            name='address' 
            className='input-from'
            value={formValues.address}
            onChange={handleChange}/>
          </div>
          <p>{formError.address}</p>
          <div>
            <select className='gender-check' name='state' value={formValues.state} onChange={handleChange}>
              <option value=''>Select State</option>
              <option value='1'>Andhra Pradesh</option>
              <option value='2'>Arunachal Pradesh</option>
              <option value='3'>Assam</option>
              <option value='4'>Bihar</option>
              <option value='5'>Chhattisgarh</option>
              <option value='6'>Goa</option>
              <option value='7'>Gujarat</option>
              <option value='8'>Haryana</option>
              <option value='9'>Himachal Pradesh</option>
              <option value='10'>Jharkhand</option>
              <option value='11'>Karnataka</option>
              <option value='12'>Kerala</option>
              <option value='13'>Madhya Pradesh</option>
              <option value='14'>Maharashtra</option>
              <option value='15'>Manipur</option>
              <option value='16'>Meghalaya</option>
              <option value='17'>Mizoram</option>
              <option value='18'>Nagaland</option>
              <option value='19'>Odisha</option>
              <option value='20'>Punjab</option>
              <option value='21'>Rajasthan</option>
              <option value='22'>Sikkim</option>
              <option value='23'>Tamil Nadu</option>
              <option value='24'>Telangana</option>
              <option value='25'>Tripura</option>
              <option value='26'>Uttarakhand</option>
              <option value='27'>Uttar Pradesh</option>
              <option value='28'>West Bengal</option>
            </select>
          </div>
          <p>{formError.state}</p>
          <div>
            <input type='radio' className='gender-check' name='gender' value={formValues.gender} onChange={handleChange}/>Male
            <input type='radio' className='gender-check' name='gender' value={formValues.gender} onChange={handleChange}/>Female<br/>
            <button  className='input-btn'>Submit</button>
          </div>
          <p>{formError.gender}</p>
          <div>
            <button className='input-btn'>Register</button>
            </div>
        </form>
        
    </div>
  )
}

export default About