import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

export default function Registration() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:""
  })

  let name, value;
  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  const register = async(e) =>{
    e.preventDefault();
    const {name,email,phone,work,password} = user;

    const res = await fetch('/register',{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        name,email,work,phone,password
      })
    });

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Invalid");
      console.log("Invalid");
    }else{
      window.alert("User Registered Successfully");
      navigate("/login");
    }
  }


  return (
    <>
      <div className='container my-5'>
        <div className='container mx-5 my-5 row'>

          <div className='container col-6'>
            <h1>Sign Up</h1>
            <form method='POST'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={handleInputs} name='name' value={user.name} id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={handleInputs} name='email' value={user.email} id="email" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" onChange={handleInputs} name='phone' value={user.phone} id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="work" className="form-label">Work</label>
                <input type="text" className="form-control" onChange={handleInputs} name='work' value={user.work} id="work" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={handleInputs} name='password' value={user.password} id="password" />
              </div>
              <button onClick={register} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className='col-6 '>
            <img className='w-75 h-75 my-5' src='https://cdn.dribbble.com/users/988448/screenshots/5240042/icon_cadastro_v5.gif' alt='signup-gif'/>
          </div>

        </div>
      </div>
    </>
  )
}
