import React, { useState } from 'react'

const Create = () => {
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);
    const[email,setEmail] = useState("");

    const handleSubmit = async ()=>{
        
    }
  return (
    <div className ="container py-4">
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlfor="Name" className="form-label">Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlfor="Email" className="form-label">Email address</label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlfor="Age" className="form-label">Age</label>
      <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary ">Submit</button>
  </form>
    </div>
  )
}

export default Create