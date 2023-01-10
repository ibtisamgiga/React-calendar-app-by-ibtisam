 import { useState,useEffect } from "react";
 import { useHistory } from "react-router-dom";

const CreateEvent = () => {
    const [ownerEmail,setownerEmail]=useState(null);

    useEffect(() => {
   
        const user=localStorage.getItem('email')
        setownerEmail(user)
    
    
      },[ownerEmail])
  
  const [name, setName] = useState('');
  const [location,setLocation]=useState("");
  const [stime,setStime]=useState("");
  const [etime,setEtime]=useState("");
  const [errorMess,setErrorMess]=useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const allday = ;
    //console.log(allday)
    console.log(stime,"stime")

    fetch('http://localhost:5000/events/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      
      body: JSON.stringify({ name,location,ownerEmail,stime,etime })
    }).then((res) => {
      res.json()
      .then((data)=>{
          console.log("sssss",data.message)

//           //console.log(data.errors)
//           //console.log(data,'ff')
// setErrorMess(data.message)
//          // console.log(data,'ss')
//             //setError(data.errors)
//             //console.log(errorMess,'ss')
//            if(!data.errors){
//             console.log("noerr")
//             history.push('/home');
//            }

      })
    // history.go(-1);
    
  })
  // history.push('/home');
  history.push('/calendar')
  }
  const handleChange = (e) => {
    var id  = '';
    document.querySelectorAll(".start").forEach(opt=>{
        if(opt.value === e.target.value){
            id = opt.id
            // (id)
        }
    })
    console.log(id)
    document.querySelectorAll(".end").forEach(opt => {
        if (parseFloat(opt.id) <= parseFloat(id)) {
            console.log(opt.id)
            opt.disabled = true;
        }
    });
}

  return (
    <div className="bg">
    <div className="container-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          required 
          value={name}
           onChange={(e) => setName(e.target.value)}
        />

<label>Location:</label>
        <input 
          type="text" 
          required 
           value={location}
           onChange={(e) => setLocation(e.target.value)}
        />

<label>Start Time:</label>
        <select
        id="stime" required 
          value={stime}
          onChange={(e) => {setStime(e.target.value)
          handleChange(e)}}
        >
          <option  className="start" id="9" value="9:00am">9:00am</option>
            <option className="start" id="9.5" value="9:30am"> 9:30am</option>
            <option  className="start" id="10"  value="10:00am"> 10:00am</option>
            <option  className="start" id="10.5"value="10:30am"> 10:30am</option>
            <option className="start" id="11" value="11:00am"> 11:00am</option>
            <option className="start" id="11.5" value="11:30am"> 11:30am</option>
            <option className="start" id="12"  value="12:00pm">12:00pm </option>
            <option  className="start" id="12.5" value="12:30pm"> 12:30pm</option>
            <option className="start" id="13" value="1:00pm"> 1:00pm</option>
            <option className="start" id="13.5" value="1:30pm"> 1:30pm</option>
            <option className="start" id="14" value="2:00pm"> 2:00pm</option>
            <option className="start" id="14.5" value="2:30pm"> 2:30pm</option>
            <option className="start" id="15" value="3:00pm"> 3:00pm</option>
            <option className="start" id="15.5" value="3:30pm"> 3:30pm</option>
            <option className="start" id="16" value="4:00pm"> 4:00pm</option>
            <option className="start" id="16.5" value="4:30pm"> 4:30pm</option>
            <option className="start" id="17" value="5:00pm"> 5:00pm</option>
            <option className="start" id="17.5" value="5:30pm"> 5:30pm</option>
            <option className="start" id="18" value="6:00pm"> 6:00pm</option>
            <option className="start" id="18.5" value="6:30pm"> 6:30pm</option>
            <option className="start" id="19" value="7:00pm"> 7:00pm</option>
            <option className="start" id="19.5" value="7:30pm"> 7:30pm</option>
        </select>


        <label>End Time:</label>
        <select
        id="etime" name="etime" required className="end"
          value={etime}
          onChange={(e) => setEtime(e.target.value)}
        >
         <option  className="end" id="9" value="9:00am">9:00am</option>
            <option className="end" id="9.5" value="9:30am"> 9:30am</option>
            <option  className="end" id="10"  value="10:00am"> 10:00am</option>
            <option  className="end" id="10.5"value="10:30am"> 10:30am</option>
            <option className="end" id="11" value="11:00am"> 11:00am</option>
            <option className="end" id="11.5" value="11:30am"> 11:30am</option>
            <option className="end" id="12"  value="12:00pm">12:00pm </option>
            <option  className="end" id="12.5" value="12:30pm"> 12:30pm</option>
            <option className="end" id="13" value="1:00pm"> 1:00pm</option>
            <option className="end" id="13.5" value="1:30pm"> 1:30pm</option>
            <option className="end" id="14" value="2:00pm"> 2:00pm</option>
            <option className="end" id="14.5" value="2:30pm"> 2:30pm</option>
            <option className="end" id="15" value="3:00pm"> 3:00pm</option>
            <option className="end" id="15.5" value="3:30pm"> 3:30pm</option>
            <option className="end" id="16" value="4:00pm"> 4:00pm</option>
            <option className="end" id="16.5" value="4:30pm"> 4:30pm</option>
            <option className="end" id="17" value="5:00pm"> 5:00pm</option>
            <option className="end" id="17.5" value="5:30pm"> 5:30pm</option>
            <option className="end" id="18" value="6:00pm"> 6:00pm</option>
            <option className="end" id="18.5" value="6:30pm"> 6:30pm</option>
            <option className="end" id="19" value="7:00pm"> 7:00pm</option>
            <option className="end" id="19.5" value="7:30pm"> 7:30pm</option>
        </select>
        <br />

{/*        
       <input 
       
          type="text" 
          required 
           value={ownerEmail}
           hidden={true}
          
        //   onChange={(e) => setPassword(e.target.value)}
        /> */}
        <br />
        <div className="err">{errorMess}</div>
        <button>Create Event</button>
      </form>
    </div>
    </div>
  );
}
 
export default CreateEvent;