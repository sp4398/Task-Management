import React,{useState} from 'react'
import './SignIn.css';

function SignIn({signIn}) {
    const [data,setData]=useState(()=>{});


    function handleInputChange({target:{name,value}}){
      setData({...data,[name]:value})
    }
    
    function submitForm(){
    signIn(data.username,data.password,data.phoneNumber);
    
    }
    
    
      return (
        <div className='signIn'>
        <input onChange={handleInputChange} type="email"    name="username" placeholder='Enter your email' className='email'/><br/>
        <input onChange={handleInputChange} type="password" name="password" placeholder='Enter password' className='pass'/><br/>
        <button onClick={submitForm} className='btn btn-primary'>Login</button>
        </div>
      )
}

export default SignIn
