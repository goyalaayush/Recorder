import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import './style.css';

const Login = () => {

    const [redirect,setredirect]=useState(false);
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');

    const save=async(e)=>{

        e.preventDefault();
    
        const response=await fetch('http://localhost:4000/login',{

        method:'POST',
        body:JSON.stringify({email,pass}),
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        })
          
       if(response.ok)
      setredirect(true)
    else
      alert('wrong credentials')
        
    }

    if(redirect)
    {
        return (<Navigate to='/home'></Navigate>)
    }

  return (
    <div className='form-container'>
    <form classname="form" onSubmit={save}>

        <label>Email</label>
        <br></br>
        <input type='email' placeholder='enter email' onChange={e=>setemail(e.target.value)}></input>
        <br></br>

        <label>Password</label>
        <br></br>
        <input type='password' placeholder='enter password' onChange={e=>setpass(e.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={save}>Login</button>
        </form>
        </div>
       
  )
}

export default Login
