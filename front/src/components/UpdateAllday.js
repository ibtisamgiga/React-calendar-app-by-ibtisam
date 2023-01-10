import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
const UpdateAllday = () => {

    const {id}=useParams()

    const history = useHistory();
    const[location,setLocation]=useState(null)
    const[name,setName]=useState(null)
    const [ownerEmail,setownerEmail]=useState(null);
    const [refresh,setRef]=useState(true)

    useEffect(() => {
        if(refresh){
           // history.go(0)
            console.log("refresh")
        }
       // history.go(0)
        const user=localStorage.getItem('email')
        setownerEmail(user)
    
        fetch('http://localhost:5000/allevents/all-event/'+id, {
             method: 'GET',
         }).then((res) => {
             res.json()
             .then((data)=>{
                console.log(data)
                localStorage.setItem("name",data[0].name)
                localStorage.setItem("loc",data[0].location)
                setName( localStorage.getItem("name"))
                setLocation( localStorage.getItem("loc"))
                
                
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
   console.log(name,location,ownerEmail)
  

   // const allday = ;
     //console.log(allday)

    fetch('http://localhost:5000/allevents/'+id, {
     method: 'PUT',
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ name,location,ownerEmail })
     }).then((res) => {
       res.json()
       .then((data)=>{
           console.log(data)
       })
    
      // history.go(-2);
      history.push('/calendar')
    
  })
//   history.push('/home');
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
  {/*        
         <input 
         
            type="text" 
            required 
             value={ownerEmail}
             hidden={true}
            
          //   onChange={(e) => setPassword(e.target.value)}
          /> */}
          <button>Update</button>
        </form>
      </div>
      </div>
    
    );
}
 
export default UpdateAllday;