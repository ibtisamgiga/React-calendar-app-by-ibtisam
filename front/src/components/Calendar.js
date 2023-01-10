import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import useFetch from "./useFetch";
 import { useHistory } from "react-router-dom";

const Calendar = () => {
    const [email,setEmail]=useState(null);
var k = 0;
var idd;
var count = 0;
var eventArray = [];
const history = useHistory()
let refresh=true

//MAKE EVENT FUNCTION TO CONVERT TIME TO 24 HRS FORMAT

function makeEvent(name, loc, sTime, Etime,id) {
    // console.log(id)
   var timeToDisplay = sTime;
   if (sTime.includes("12")) {
     sTime = sTime.split("p")[0];
     sTime = sTime.split(":");
     var a = parseInt(sTime[0]) + 0;
     if (sTime[1] === "30") {
       var b = 0.5;
       sTime = a + b;
     } else {
       sTime = a;
     }
   } else if (sTime.includes("pm")) {
     sTime = sTime.split("p")[0];
     sTime = sTime.split(":");
     a = parseInt(sTime[0]) + 12;
     if (sTime[1] === "30") {
        b = 0.5;
       sTime = a + b;
     } else {
       sTime = a;
     }
   } else {
     sTime = sTime.split("a")[0];
     sTime = sTime.split(":");
     a = parseInt(sTime[0]) + 0;
     // console.log(a)
     if (sTime[1] ==="30") {
       b = 0.5;
       sTime = a + b;
     } else {
       sTime = a;
     }
   }
 
   /////////////////////////////////////////////////////////////////
 
   if (Etime.includes("12")) {
     Etime = Etime.split("p")[0];
     Etime = Etime.split(":");
     var c = parseInt(Etime[0]) + 0;
     // console.log(a)
     if (Etime[1] === "30") {
       var d = 0.5;
       Etime = c + d;
     } else {
       Etime = c;
     }
   } else if (Etime.includes("pm")) {
     Etime = Etime.split("p")[0];
     Etime = Etime.split(":");
    c = parseInt(Etime[0]) + 12;
     // console.log(a)
     if (Etime[1] === "30") {
     d = 0.5;
       Etime = c + d;
     } else {
       Etime = c;
     }
   } else {
     Etime = Etime.split("a")[0];
     Etime = Etime.split(":");
    c = parseInt(Etime[0]) + 0;
     // console.log(a)
     if (Etime[1] === "30") {
        d = 0.5;
       Etime = c + d;
     } else {
       Etime = c;
     }
   }
 
   if (Etime <= sTime) {
     alert("PLEASE ENTER VALID TIME");
     return;
   }
 
   /////////////////////////////////////////////////////////
 
   var event = {
     Ename: name,
     loc: loc,
     sTime: sTime,
     eTime: Etime,
     nametodisp: timeToDisplay,
     eventId:id
   };
 
   var etname = `event${count}`;
 
   etname = event;
 
   eventArray.push(etname);
 }
 

 




 //SETALLDay function to set evnts for all day
 

 //FUNCTION CREATE EVENTS CREATE EVENT BY DOM MANUPLATION TO RENDER IT OWN SCREEN
 
 function createEvent(eventName, loc, time, endtime, disp,eid) {
     console.log(eid)
     var link= '/delete/event/'+eid
     //"/events/del/"+eid
     var uplink='/update/event/'+eid
     //"/events/update/"+eid
   var tag = document.createElement("div");
  
   tag.classList.add("event");
 
 // console.log("/events/del/"+eid)
   idd = k.toString();
   tag.id = idd;
   tag.style.height = calculateheigh(endtime, time);
//    console.log(calculateheigh(endtime, time))
   var ti = document.createElement("h3");
   ti.innerHTML = disp + "-";
   //ti.href = "/events/del"
   var name = document.createElement("h3");
   name.innerHTML = eventName;
   var location = document.createElement("h3");
 
   location.innerHTML = loc;
 
   var del = document.createElement("a");
 
   del.innerHTML = "delete";
 
 
 
   del.setAttribute("href", link);
 
 
 /******************* */
 var update = document.createElement("a");
 
 update.innerHTML = "update";
 
 
 del.setAttribute("class", "del-button");
 
 update.setAttribute("class", "update-button");
 
 
 update.setAttribute("href", uplink);
 //update.setAttribute('click',history.push(0))
//  del.onclick = function() {
//   console.log("helloooo")
//   // add code here
// }
   
   location.style.color = "#269326";
   ti.style.color = "#c7c7c7";
   ti.style.marginTop="30px"
   name.style.marginTop="30px"
   location.style.marginTop="30px"

   update.style.marginTop="30px"
   tag.appendChild(ti);
   tag.appendChild(name);
   tag.appendChild(location);
   tag.appendChild(del);
   tag.appendChild(update);
   var element = document.getElementById(time);
   element.appendChild(tag);
   k++;
 
   if (tag.style.height > "8rem") {
     tag.style.WebkitFlexDirection = "row";
   } else if (tag.style.height < "4rem") {
     tag.style.WebkitFlexDirection = "column";
   }
 
   return tag;
 }
 
 //CALCULATE HEIGHT FOR EACH EVENT DIV USED IN CREATENCTION
 function calculateheigh(a, b) {
   var c = ((a - b) * 4 * 2).toString() + "rem";
   return c;
 }
 
 function elementsOverlap(el1, el2) {
    console.log("overlap called")
   const domRect1 = el1.getBoundingClientRect();
   const domRect2 = el2.getBoundingClientRect();
 
   return !(
     domRect1.top > domRect2.bottom ||
     domRect1.right < domRect2.left ||
     domRect1.bottom < domRect2.top ||
     domRect1.left > domRect2.right
   );
 }
 






/*************************************************** */



   function makeAlldy(name, loc,eid) {
    var link= '/delete/allday/'+eid
    //"http://localhost:5000/allevents/del/"+eid
    var uplink='/update/allday/'+eid
    //"/allevents/update/"+eid
    var allDayEvt = document.createElement("div");
  
    allDayEvt.setAttribute("class", "allevent");
  
    let AllTime = document.createElement("h1");
    AllTime.innerHTML = "ALL DAY-";
  
  
   let update = document.createElement("a");
  
    update.innerHTML = "update";
  
    
    
    
    update.setAttribute("href", uplink);
  
  
    let allEname = document.createElement("p");
    allEname.innerHTML = name;
  
   let del = document.createElement("a");
  
    del.innerHTML = "delete";
  
    del.setAttribute("class", "del-button1");
  
    update.setAttribute("class", "update-button1");
  
  
    del.setAttribute("href", link);
  
    let allEloc = document.createElement("p");
    allEloc.innerHTML = loc;
  
    allDayEvt.setAttribute("id", "evt");
    AllTime.setAttribute("id", "gray");
    allEloc.setAttribute("id", "allDayLoc");
  
    allDayEvt.appendChild(AllTime);
    allDayEvt.appendChild(allEname);
    allDayEvt.appendChild(allEloc);
    allDayEvt.appendChild(del);
    allDayEvt.appendChild(update);
  
    var elall = document.getElementById("daily");
    elall.appendChild(allDayEvt);
  }
















   /*** */

 useEffect(() => {
   
        const user=localStorage.getItem('email')
        setEmail(user)
   
        
        fetch('http://localhost:5000/allevents/all-events/'+email, {
            method: 'GET',
          }).then((res) => {
            res.json()
            .then((data)=>{

                data.forEach((element) => {
                    //console.log(element.name)
                   
                      makeAlldy(element.name, element.location,element._id);}
            
              )
               
            // console.log(data)
            })
          // history.go(-1);
          
        })
       
        fetch('http://localhost:5000/events/all-events/'+email, {
            method: 'GET',
          }).then((res) => {
            res.json()
            .then((data)=>{
                if(data){
                    data.forEach((element) => {
                         makeEvent(element.name, element.location,element.stime,element.etime,element._id);
                        }) 
                }
                var renderArray = [];


               
               
                eventArray.forEach((element) => {
                    // console.log("hheeelo")
                   var m = createEvent(
                     element.Ename,
                     element.loc,
                     element.sTime,
                     element.eTime,
                     element.nametodisp,
                     element.eventId
                   );
                   renderArray.push(m);
                //    console.log(renderArray,'inside')
                 });
                 for (let i = 0; i < renderArray.length; i++) {
                    for (let j = i + 1; j < renderArray.length; j++) {
                      //console.log(z[i])
                      if (elementsOverlap(renderArray[i], renderArray[j])) {
                        var a = renderArray[i].parentElement;
                        var h = ((a.id - eventArray[j].sTime) * -4 * 2).toString() + "rem";
                        a.appendChild(renderArray[j]);
                  
                        renderArray[j].style.marginTop = h;
                      }
                    }
                  }
                 
               
            // console.log(data,'datat')
            // console.log(eventArray,'aa')
            // console.log(renderArray,'naa')
            

            })
          // history.go(-1);
          
        })
       
    
    
      },[email,eventArray,createEvent,makeEvent])















      //FUNCTION CREATE EVENTS CREATE EVENT BY DOM MANUPLATION TO RENDER IT OWN SCREEN



    return ( 
        <div className="main">
        <div className="nav">
        <h1 className="ti"><a href="/">CALENDAR</a></h1>
            <ul>
            
           
             
                    <li style={{color:"white"}}>{email}</li>
                    {/* <li><a href="/logout">Log out</a></li> */}
                    {/* <li><Link to="/create/event">create-event</Link></li>
                    <li><Link to="/create/allday">create-allday</Link></li> */}

                  
                      
            </ul>
        </div>

        <div id="datesec">
            <p id="currUSER">{email}</p>
            <p id="currdate">FRIDAY, APRIL 1</p>

        </div>
        <div id="daily">
        
        </div>
        <div id="time">



            <div id="AM">
                <span id="red">AM</span>
                <div className="clck">
                    <div id="9" className="full1">
                        <h1>9:00</h1>
                    </div>
                    <div id="9.5" className="half">
                        <h1>9:30</h1>
                    </div>
                    <div id="10" className="full">
                        <h1>10:00</h1>
                    </div>
                    <div id="10.5" className="half">
                        <h1>10:30</h1>
                    </div>
                    <div id="11" className="full">
                        <h1>11:00</h1>
                    </div>
                    <div id="11.5" className="half">
                        <h1>11:30</h1>
                    </div>
                </div>
            </div>
            <div id="PM">
                <span id="blue">PM</span>
                <div className="clck">
                    <div id="12" className="full1">
                        <h1>12:00</h1>
                    </div>
                    <div id="12.5" className="half">
                        <h1>12:30</h1>
                    </div>
                    <div id="13" className="full">
                        <h1>1:00</h1>
                    </div>
                    <div id="13.5" className="half">
                        <h1>1:30</h1>
                    </div>
                    <div id="14" className="full">
                        <h1>2:00</h1>
                    </div>
                    <div id="14.5" className="half">
                        <h1>2:30</h1>
                    </div>
                    <div id="15" className="full">
                        <h1>3:00</h1>
                    </div>
                    <div id="15.5" className="half">
                        <h1>3:30</h1>
                    </div>
                    <div id="16" className="full">
                        <h1>4:00</h1>
                    </div>
                    <div id="16.5" className="half">
                        <h1>4:30</h1>
                    </div>
                    <div id="17" className="full">
                        <h1>5:00</h1>
                    </div>
                    <div id="17.5" className="half">
                        <h1>5:30</h1>
                    </div>
                    <div id="18" className="full">
                        <h1>6:00</h1>
                    </div>
                    <div id="18.5" className="half">
                        <h1>6:30</h1>
                    </div>
                    <div id="19" className="full">
                        <h1>7:00</h1>
                    </div>
                    <div id="19.5" className="half">
                        <h1>7:30</h1>
                    </div>
                    <div id="20" className="full">
                        <h1>8:00</h1>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Calendar;