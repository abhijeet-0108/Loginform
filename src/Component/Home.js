import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

const Home = () => {
  const data = {name:'',email:'',password:''}
 const[formValues,setFormValues] = useState(data);
 const[formError,setFormErrors] = useState({});
 const[isSubmit,setIsSubmit] = useState(false)
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
  const {name,value} = e.target;
  setFormValues({...formValues , [name]:value});
   console.log(e.target.value);
 }
 const handleSubmit = (e)=>{
     e.preventDefault();
    setFormErrors(Validate(formValues)); 
    setIsSubmit(true);
    
 }
 const Validate = (values)=>{
  const errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.name){
    errors.name = "Name is Required !"
  }else if(values.name.length>10){
    errors.name = "Name should be less than 10 characters"
  }else if(values.name.length<=1){
    errors.name = "Enter a Valid Name"
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
 
   return errors ;
  
 }


  return (
    <div className='main'>
      <div className='navigate'><NavLink to='/about' >Registration</NavLink></div> 
      {Object.keys(formError).length === 0 && isSubmit ?(
        <div className="ui">Welcome {formValues.email} You are Signed in successfully</div>
      ) : (""
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      
        <form className='container' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <input type='text' placeholder='Enter Your Name' name='name' className='input-from' value={formValues.name} onChange={handleChange}/>
          </div>
          <p>{formError.name}</p>
          <div>
            <input type='text' placeholder='Enter Your Email' name='email' className='input-from' value={formValues.email} onChange={handleChange}/>
          </div>
          <p>{formError.email}</p>
          <div className='toglepass'>
            <input type={type} placeholder='Enter Your Password' name='password' className='input-from' value={formValues.password} onChange={handleChange}/>
            <span onClick={handleToggle}><Icon icon={icon}/></span>
          </div>
          <p>{formError.password}</p>
          <div>
           <button className='input-btn'>Login</button>
          </div>
          <div className='navigatetopass'><NavLink to='/setpassword' >Forget Password</NavLink></div>
        </form>
        
    </div>
  )
}

export default Home