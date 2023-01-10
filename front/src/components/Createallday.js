import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const Createallday= () => {
    const [ownerEmail,setownerEmail]=useState(null);

    useEffect(() => {
   
        const user=localStorage.getItem('email')
        setownerEmail(user)
    
    
      },[ownerEmail])
  
  const [name, setName] = useState('');
  const [location,setLocation]=useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const allday = ;
    //console.log(allday)

    fetch('http://localhost:5000/allevents/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name,location,ownerEmail })
    }).then((res) => {
      res.json()
      .then((data)=>{
          console.log(data)
      })
    // history.go(-1);
    
  })
  // history.push('/home');
  history.push('/calendar')
  }

  return (
    <div className="bg">
    <div className="container-form">
      <h2>Create all day</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
         input maxLength={10}
          type="text" 
          required 
          value={name}
           onChange={(e) => setName(e.target.value)}
        />

<label>Location:</label>
        <input 
        input maxLength={10}
          type="text" 
          required 
           value={location}
           onChange={(e) => setLocation(e.target.value)}
        />
{/*        
       <input 
       
          type="text" 
          required 
           value={ownerEmail}
           hidden={true}
          
        //   onChange={(e) => setPassword(e.target.value)}
        /> */}
        <button>Create all day</button>
      </form>
    </div>
    </div>
  );
}
 
export default Createallday;