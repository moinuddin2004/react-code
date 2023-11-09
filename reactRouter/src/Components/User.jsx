 
import { useParams } from "react-router-dom" 
 
 
const User=()=>{
    const {id}=useParams()
    return(
     <h2>user:{id}</h2>
    )
}

export default User