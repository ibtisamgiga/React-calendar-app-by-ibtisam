import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const DeleteEvent = () => {

    const {id}=useParams()
    const history = useHistory();

    useEffect(() => {
   
        
        fetch('http://localhost:5000/allevents/del/'+id, {
            method: 'GET',
          }).then((res) => {
            res.json()
            .then((data)=>{
            })
          // history.go();
           history.push('/calendar')
           //history.go(0)
          
        })
       
       
       
    
    
      })








    
    // return ( <h1>delete-{id}</h1> );
}
 
export default DeleteEvent;