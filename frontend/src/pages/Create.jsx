import React, { useState } from 'react'

const Create = () => {
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);
    const[email,setEmail] = useState("");
    const[error,setError] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const addUser = {name,age,email}
        const res = await fetch("http://localhost:5000",{
          method:"POST",
          body:JSON.stringify(addUser),
          headers:{
            "Content-Type":"application/json",
          },
        });
        const result = await res.json();
        if(!res.ok){
          console.log(result.error);
          setError(result.error)
        }
        if(res.ok){
          console.log(result)
          setError("");
          setName("");
          setAge(0);
          setEmail("");
        }
    }
  return (
    <div className ="container py-4">
      {error && <div class="alert alert-danger" >{error}</div>}
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="Name" className="form-label">Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="Email" className="form-label">Email address</label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="Age" className="form-label">Age</label>
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary ">Submit</button>
  </form>
    </div>
  )
}

export default Create