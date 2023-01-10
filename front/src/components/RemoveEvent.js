import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const RemoveEvent = () => {
    const {id}=useParams()
    const history = useHistory();

    useEffect(() => {
   
        
        fetch('http://localhost:5000/events/del/'+id, {
            method: 'GET',
          }).then((res) => {
            res.json()
            .then((data)=>{
            })
          //  history.go(-2);
           //history.go(0)
           history.push('/calendar')
          
        })
       
       
       
    
    
      })








    
    // return (  );
}
 
export default RemoveEvent;