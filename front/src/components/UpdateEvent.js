import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
function UpdateEvent() {
    const {id}=useParams()

    const history = useHistory();
    const[location,setLocation]=useState(null)
    const[name,setName]=useState(null)
    const [ownerEmail,setownerEmail]=useState(null);
    const [refresh,setRef]=useState(true)
    const [stime,setStime]=useState(null)
    const [etime,setEtime]=useState(null)
    useEffect(() => {
        if(refresh){
           // history.go(0)
            console.log("refresh")
        }
       // history.go(0)
        const user=localStorage.getItem('email')
        setownerEmail(user)
    
        fetch('http://localhost:5000/events/all-event/'+id, {
             method: 'GET',
         }).then((res) => {
             res.json()
             .then((data)=>{
                console.log(data)
                localStorage.setItem("name",data[0].name)
                localStorage.setItem("loc",data[0].location)
                localStorage.setItem("stime",data[0].stime)
                localStorage.setItem("etime",data[0].etime)
                setName( localStorage.getItem("name"))
                setLocation( localStorage.getItem("loc"))
                setStime( localStorage.getItem('stime'))
                setEtime( localStorage.getItem('etime'))
                
                
                
             //setEvent(data)
                
             })
              //setEvent(data)
           //history.go(-2);
            //history.go(0)
          
         })
       setRef(false)
     
    
    
    //  
 },[id])


 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,location,ownerEmail,stime,etime)
   
    fetch('http://localhost:5000/events/'+id, {
     method: 'PUT',
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ name,location,ownerEmail,stime,etime })
     }).then((res) => {
       res.json()
       .then((data)=>{
           console.log(data)
       })
    
    //   history.go(-2);
    history.push('/calendar')
    
  })
 
  
   }
 

  return (
    <div className="bg">
    <div className="container-form">
    <h2>Update all day</h2>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type="text" 
        required 
        defaultValue={name}
         onChange={(e) => setName(e.target.value)}
      />

<label>Location:</label>
      <input 
        type="text" 
        required 

        
        defaultValue={location}
         onChange={(e) => setLocation(e.target.value)}
      />

<label>Start Time:</label>
        <select
        id="stime" required
        value={stime}
          onChange={(e) => setStime(e.target.value)}
        >
             
          <option value="9:00am">9:00am</option>
            <option value="9:30am"> 9:30am</option>
            <option value="10:00am"> 10:00am</option>
            <option value="10:30am"> 10:30am</option>
            <option value="11:00am"> 11:00am</option>
            <option value="11:30am"> 11:30am</option>
            <option value="12:00pm">12:00pm </option>
            <option value="12:30pm"> 12:30pm</option>
            <option value="1:00pm"> 1:00pm</option>
            <option value="1:30pm"> 1:30pm</option>
            <option value="2:00pm"> 2:00pm</option>
            <option value="2:30pm"> 2:30pm</option>
            <option value="3:00pm"> 3:00pm</option>
            <option value="3:30pm"> 3:30pm</option>
            <option value="4:00pm"> 4:00pm</option>
            <option value="4:30pm"> 4:30pm</option>
            <option value="5:00pm"> 5:00pm</option>
            <option value="5:30pm"> 5:30pm</option>
            <option value="6:00pm"> 6:00pm</option>
            <option value="6:30pm"> 6:30pm</option>
            <option value="7:00pm"> 7:00pm</option>
            <option value="7:30pm"> 7:30pm</option>
        </select>


        <label>End Time:</label>
        <select
        id="etime" name="etime" required
        value={etime}
          onChange={(e) => setEtime(e.target.value)}
        >
          <option value="9:00am">9:00am</option>
            <option value="9:30am"> 9:30am</option>
            <option value="10:00am"> 10:00am</option>
            <option value="10:30am"> 10:30am</option>
            <option value="11:00am"> 11:00am</option>
            <option value="11:30am"> 11:30am</option>
            <option value="12:00pm">12:00pm </option>
            <option value="12:30pm"> 12:30pm</option>
            <option value="1:00pm"> 1:00pm</option>
            <option value="1:30pm"> 1:30pm</option>
            <option value="2:00pm"> 2:00pm</option>
            <option value="2:30pm"> 2:30pm</option>
            <option value="3:00pm"> 3:00pm</option>
            <option value="3:30pm"> 3:30pm</option>
            <option value="4:00pm"> 4:00pm</option>
            <option value="4:30pm"> 4:30pm</option>
            <option value="5:00pm"> 5:00pm</option>
            <option value="5:30pm"> 5:30pm</option>
            <option value="6:00pm"> 6:00pm</option>
            <option value="6:30pm"> 6:30pm</option>
            <option value="7:00pm"> 7:00pm</option>
            <option value="7:30pm"> 7:30pm</option>
        </select>
        <br />

      <button>Update</button>
    </form>
  </div>
  </div>
  )
}

export default UpdateEvent