import React,{useEffect,useState} from 'react'

export default function Contact() {

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
  return (
    <>
    <div className='container my-5 mx-5'>
      <div className='container row'  >
        

        <div className='container my-3 col-6'>
        <h1>Contact Us</h1>
        <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input value={userData.name} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input value={userData.email} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">phone</label>
                <input value={userData.phone} type="text" class="form-control" id="phone" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="text" class="form-label">Query</label>
                <textarea rows={9} type="text" class="form-control" id="text" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>

    </div>
    </>
  )
}
