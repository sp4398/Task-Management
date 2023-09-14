import React, { useState } from 'react'
import './SignUp.css'

function SignUp({signUp}) {

const [data,setData]=useState(()=>{});


function handleInputChange({target:{name,value}}){
  setData({...data,[name]:value})
}

function submitForm(){
signUp(data.username,data.password,data.phone,data.name);

}


  return (
    <div className='signUp'>
    <input onChange={handleInputChange} type="text"    name="name" placeholder='Enter full name' className='name'/><br/>
    <input onChange={handleInputChange} type="email"    name="username" placeholder='Enter your email' className='email'/><br/>
    <input onChange={handleInputChange} type="text"     name="phone" placeholder='Enter phone number' className='phone'/><br/>
    <input onChange={handleInputChange} type="password" name="password" placeholder='Enter password' className='pass'/><br/>
    <button onClick={submitForm} className="btn btn-primary">Register</button>
    </div>
  )
}

export default SignUp
