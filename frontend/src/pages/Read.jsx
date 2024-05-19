import React, { useEffect, useState } from "react";

const Read = () => {
const [data,setData] = useState();
const[error,setError] = useState();

useEffect(() => {
  const getData = async ()=>{
      try {
       const res = await fetch("http://localhost:5000");
       const result = await res.json();
       setData(result)
       console.log(data)
      } catch (error) {
       setError("Unable to fetch data")
      }
  }
  getData();
},[])
if(error) return <div>{error}</div>


  return (
    <div className="container my-2">
      <h2 className="text-center">All Data</h2>
    <div className="col-2">
      {data.map((data,index) => (
        <div className="border w-20" key={index}>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{data.email}</h6>
            <p className="card-text">{data.age}</p>
            <a href="#" className="card-link">Edit</a>
            <a href="#" className="card-link">Delete</a>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Read;
