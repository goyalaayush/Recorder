import React from 'react'
import { useState } from 'react';
import './style.css'
import { Navigate } from 'react-router-dom';

const  Register = () => {


    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [redirect,setredirect]=useState(false);

    const register=async (e)=>{

        e.preventDefault();

  const response=await fetch('http://localhost:4000/register',{

  method:'POST',
  body:JSON.stringify({email,pass}),
  headers:{'Content-Type':'application/json'},
  credentials:'include',
  })

  if(response.status===200){
  alert('Registration successful')
  setredirect(true);
  }

  else{
    alert('Failed')
  }
        
    }


    if(redirect)
    {
      return( <Navigate to={'/login'}></Navigate>)
    }



  return (
    
    <div className='form-container'>
   
    <form >

    <label>Email</label>
    <br></br>
    <input type='email' placeholder='enter email' onChange={e=>setemail(e.target.value)}></input>
    <br></br>
    <label>Password</label>
    <br></br>
    <input type='password' placeholder='enter password' onChange={e=>setpass(e.target.value)}></input>
    <br></br>
    <br></br>
    <button onClick={register}>Register</button>
</form>
</div>
  )
}

export default Register
