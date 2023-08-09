import React,{useEffect,useState} from 'react';

export default function Resume() {

    const [userData,setUserData] = useState('');
    const callContact = async() =>{
      try{
        const res = await fetch('/getdata',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          },
        })
        const data = await res.json();
        console.log(data);
        setUserData(data);
        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }
      }catch(err){
        console.log(err);
      }
    }
  
    useEffect(()=>{
      callContact();
    },[]);

    console.log(userData.resumedata[0].address);

  return (
    <>
    <h1>Your Resume</h1>

        <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">{userData.name}</h1>
            <p className="lead my-3">{userData.resumedata[0].address}</p>
            <p className="lead my-3">{userData.resumedata[0].phone}</p>
            <p className="lead my-3">{userData.resumedata[0].portfolio}</p>
            <a href={userData.resumedata[0].github}><p className="lead my-3">{userData.resumedata[0].github}</p></a>
            <a href={userData.resumedata[0].linkdin}><p className="lead my-3">{userData.resumedata[0].linkdin}</p></a>
            </div>
        </div>

        </main>

        <from>
            <button className='btn btn-outline-info'>Download</button>
        </from>
    </>
  )
}
