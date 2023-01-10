import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMess,setErrorMess]=useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email,password,firstName,lastName };

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((res) => {
      res.json()
      .then((data)=>{
        console.log(data.errors)
          //console.log(data,'ff')
setErrorMess(data.errors)
         // console.log(data,'ss')
            //setError(data.errors)
            //console.log(errorMess,'ss')
           if(!data.errors){
            console.log("noerr")
            history.push('/home');
           }



      })
    // history.go(-1);
    //  history.push('/home');
  })
  }

  return (
    <div className="bg">
    <div className="container-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>

   
      <label>First Name:</label>
        <input 
          type="text" 
          required 
          maxLength={10}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}


        />

<label>Last Name:</label>
        <input 
          type="text" 
          required 
          maxLength={10}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />




        <label>Email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

<label>Password:</label>
        <input 
          type="text" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <div className="err">{errorMess}</div>
        
        <button>Signup</button>
      </form>
    </div>
    </div>
    

  );
}
 
export default Signup;