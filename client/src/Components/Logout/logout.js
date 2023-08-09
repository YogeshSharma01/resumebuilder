import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    useEffect(()=>{
            fetch('/logout',{
                method:'GET',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                credentials:'include'
            }).then(()=>{
                navigate('/login',{replace:true});
            }).catch((err)=>{
                console.log(err);
            })
    })
  return (
    <>logout</>
  )
}
