import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Calendar from './components/Calendar';
import Createallday from './components/Createallday';
import CreateEvent from './components/Createevent';
import DeleteEvent from './components/DeleteEvent';
import RemoveEvent from './components/RemoveEvent';
import UpdateAllday from './components/UpdateAllday';
import UpdateEvent from './components/UpdateEvent';
// import { useState } from "react";

function App() {
  const loggedIn=localStorage.getItem("loggedIn");
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              {loggedIn==="true"?<Home/>:  <Login/>}

              {/* <Login/> */}
            </Route>
            <Route  path='/signup'>
              <Signup/>
            </Route>
            <Route  path='/login'>
              <Login/>
            </Route>
            
            <Route  path='/home'>
            {/* {loggedIn?<Home/>:  <Login/>} */}
              
                <Home/> 
            </Route>

            <Route  path='/calendar'>
            {/* {loggedIn?<Home/>:  <Login/>} */}
            {loggedIn==="true"?  <Calendar/> :  <Login/>}
              
            </Route>

            <Route  path='/create/allday'>
              <Createallday/>
            </Route>

            <Route  path='/create/event'>
              <CreateEvent/>
            </Route>

            <Route  path='/update/allday/:id'>
              <UpdateAllday/>
            </Route>

            <Route  path='/update/event/:id'>
              <UpdateEvent/>
            </Route>



            <Route  path='/delete/allday/:id'>
              <DeleteEvent/>
            </Route>

            <Route  path='/delete/event/:id'>
              <RemoveEvent/>
            </Route>






          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
