import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const login = async(e) =>{
      e.preventDefault();
      let res = await fetch('/signin',{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      });

      const data = res.json();
      if(data === 400 || !data){
        window.alert("Invalid Credentials");
      }else{
        window.alert("Login Successfully");
        navigate('/about');
      }

  }

  return (
    <>
     <div className='container my-5'>
        <div className='container mx-5 my-5 row'>

          <div className='container col-6'>
            <h1>Sign In</h1>
            <form method='POST'>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email"  className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
              </div>
              <button onClick={login} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className='col-6 '>
            <img className='w-75 h-75' src='https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif' alt='signin-gif'/>
          </div>

        </div>
      </div>
    </>
  )
}
