import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMess,setError]=useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email,password };

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((res) => {
        res.json()
        .then((data)=>{
            console.log(data,'ss')
            setError(data.error)
            if(data.error){
             
              console.log(errorMess,"insise erroe")

            }
           if(data.status==="ok"){
                 localStorage.setItem("token",data.data)
                 localStorage.setItem("loggedIn",true)
                 console.log(data.data)
            
                 history.push('/home');
                 history.go(0)
             }
             
        })
      // history.go(-1);
    //   history.push('/');
    })
  }

  return (
    <div className="bg">
    <div className="container-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        
        <button>Login</button>
      </form>
    </div>
    </div>
  );
}
 
export default Login;