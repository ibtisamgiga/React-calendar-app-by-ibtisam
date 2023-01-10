// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
const Home = () => {
  const history=useHistory();
  // window.location.reload(false);
  // window.location.reload(true);
  useEffect(() => {
   
    const token=localStorage.getItem('token')


    if(!token){
      history.push('/login')
    }
  
  })

  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  const [user, setuser] = useState(null);
  fetch('http://localhost:5000/user-details', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
        token:localStorage.getItem("token")
      }
    )
  }).then((res) => {
    res.json()
    .then((data)=>{
      setuser(data.data.email)
        console.log(data.data.email)
        localStorage.setItem('email',data.data.email)
    })
   
  // history.go(-1);
 //  history.push('/');
})



  return (

    <div className="home">
 
    
    <h2 className="main-head">CALENDAR-TASK-BY-IBTISAM</h2>
    <h3 className="main-head">Welcome:{user}</h3>
   
    <img src={"https://cdn.dribbble.com/users/6554494/screenshots/14937796/media/678312aa763e54740bfb2cb7186a12bb.gif"} className="img-main" alt='' />
    <Link className="button-home" to="/calendar" >Go to Calendar</Link>
    
</div>
 
  );
}
 
export default Home;


