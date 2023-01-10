// import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const isLoggedIn=localStorage.getItem('loggedIn')



    const history = useHistory();

    if(isLoggedIn){

    }

  const logout=()=>{
        localStorage.clear()
        history.push('/')
        history.go(0)
    }
    // const[email,setEmail]=useState(null)
    // setEmail(localStorage.getItem("email"))
    return (  
        <nav className="main-navbar">
            <h1 className="logo"><a href="/home">Calendar</a></h1>
            <div className="links">
            
            {/* <Link to="/home">Home</Link> */}
            {/* <p>{email}</p> */}

            {!localStorage.getItem('token') && (
                <Link to="/login" className="button-nav">Login</Link>
               
            )}
               {!localStorage.getItem('token') && (
            
            <Link to="/signup" className="button-nav-sign">Signup</Link>)}

              {localStorage.getItem('token') && (
            <button className="button-nav-log" onClick={logout}>Log-out</button>  )}

            {localStorage.getItem('token') && (
             <Link to="/create/event" className="button-cre">Create-Event</Link>)}

{localStorage.getItem('token') && (
             <Link to="/create/allday" className="button-cre">Create-Allday</Link>)}







            </div>



        </nav>
    );
}
 
export default Navbar;