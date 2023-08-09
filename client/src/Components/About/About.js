import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";

export default function About() {

  const navigate = useNavigate();
  const [userData,setUserData] = useState(
    {
      name:"",
      email:"",
      phone:"",
      address:"",
      github:"",
      linkdin:"",
      portfolio:"",
      education10:"",
      education12:"",
      education_graduation:"",
      education_post_graduation:"",
      skills:"",
      project1:"",
      about_project1:"",
      project2:"",
      about_project2:"",
      declaration:""
    });
  const callAboutPage = async() =>{
    try{
      const res = await fetch('/about',{
        method:'GET',
        headers:{
          Accept:"application/json",
          'Content-Type':'application/json'
        },
        credentials:"include"
      })
      const data = await res.json();
      console.log(data);
      setUserData({...userData,
        name:data.name,
        email:data.email,
        phone:data.phone,
      });
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
      navigate('/login');
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);

  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData,[name]:value})
  }

  const sendResume = async(e) =>{
    e.preventDefault();
    const {name,email,phone,address,github,linkdin,portfolio,education10,education12,education_graduation,education_post_graduation,skills,project1,about_project1,project2,about_project2,declaration} = userData;
    let res = await fetch('/resumedata',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,email,phone,address,github,linkdin,portfolio,education10,education12,education_graduation,education_post_graduation,skills,project1,about_project1,project2,about_project2,declaration
      })
    });
    const data = res.json();
    if(!data){
      console.log("Resume not send!");
    }else{
      window.alert("Resume Submit Successfully!");
    }
  }

  return (
    <>
    <div className='container my-5 mx-5'>
    <h1>Fill the form below and get your resume in minutes!</h1>
      <div className='container my-5'>
        <form method='POST'>
            <h3>Contact Info</h3>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input onChange={handleInputs} name="name" value={userData.name} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input onChange={handleInputs} name="email" value={userData.email} type="text" class="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input onChange={handleInputs} name="phone" value={userData.phone} type="text" class="form-control" id="phone" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input onChange={handleInputs} name="address" value={userData.address} type="text" class="form-control" id="address" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="github" class="form-label">Github</label>
                <input onChange={handleInputs} name="github" value={userData.github} type="text" class="form-control" id="github" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="linkdin" class="form-label">Linkdin</label>
                <input onChange={handleInputs} name="linkdin" value={userData.linkdin} type="text" class="form-control" id="linkdin" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="portfolio" class="form-label">Portfolio</label>
                <input onChange={handleInputs} name="portfolio" value={userData.portfolio} type="text" class="form-control" id="portfolio" aria-describedby="emailHelp" />
              </div>
              <h3>Education</h3>
              <div class="mb-3">
                <label for="10th" class="form-label">10th</label>
                <input onChange={handleInputs} name="education10" value={userData.education10} type="text" class="form-control" id="10th" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="12th" class="form-label">12th</label>
                <input onChange={handleInputs} name="education12" value={userData.education12} type="text" class="form-control" id="12th" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="graduation" class="form-label">Graduation</label>
                <input onChange={handleInputs} name="education_graduation" value={userData.education_graduation} type="text" class="form-control" id="graduation" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="post_graduation" class="form-label">Post Graduation</label>
                <input onChange={handleInputs} name="education_post_graduation" value={userData.education_post_graduation} type="text" class="form-control" id="post_graduation" aria-describedby="emailHelp" />
              </div>
              <h3>Skills</h3>
              <div class="mb-3">
                <label for="skill" class="form-label">Skills</label>
                <textarea rows={6} onChange={handleInputs} name="skills" value={userData.skills} type="text" class="form-control" id="skill" aria-describedby="emailHelp" />
              </div>
              <h3>Projects</h3>
              <div class="mb-3">
                <label for="project1" class="form-label">Project name 1</label>
                <input onChange={handleInputs} name="project1" value={userData.project1} type="text" class="form-control" id="project1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="about_project1" class="form-label">About Project 1</label>
                <textarea rows={6} onChange={handleInputs} name="about_project1" value={userData.about_project1} type="text" class="form-control" id="about_project1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="project2" class="form-label">Project name 2</label>
                <input onChange={handleInputs} name="project2" value={userData.project2} type="text" class="form-control" id="project2" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="about_project2" class="form-label">About Project 2</label>
                <textarea rows={6} onChange={handleInputs} name="about_project2" value={userData.about_project2} type="text" class="form-control" id="about_project2" aria-describedby="emailHelp" />
              </div>
              <h3>Declaration</h3>
              <label for="declaration" class="form-label">Declaration</label>
                <textarea rows={6} onChange={handleInputs} name="declaration" value={userData.declaration} type="text" class="form-control" id="declaration" aria-describedby="emailHelp" />

                <br/>
                <button onClick={sendResume} className='btn btn-outline-success'>Submit</button>
        </form>
      </div>
      </div>
    </>
  )
}
