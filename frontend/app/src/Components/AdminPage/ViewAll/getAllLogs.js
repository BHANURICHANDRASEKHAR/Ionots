import axios  from "axios";
import { errorfunction,successfunction } from "../../../toast";
import getToken from "../../Context/token.js";
export default async function getManagerLogs(setLoading,setData,role)
{
  if(role.role=='manager')
  {
    
    setLoading(true);
    try{ 
        const response = await axios.get("http://localhost:5000/getmnglogs");
        setData(response.data.data);
    }
    catch(error){
        console.log(error);
        errorfunction('An error occurred while fetching employee logs');
    }
    finally{
        setLoading(false);
    }
  }
  else{
    errorfunction('Your are not a manager')
  }
} 
export  async function setStatus(userdata,value)
{
  

 
 const token=getToken();
    console.log(token)
  
    try{ 
        const response = await axios.post("http://localhost:5000/setStatus",[userdata,value,JSON.parse(token)]);
        successfunction('Status updated successfully');
    }
    catch(error){
        console.log(error);
        errorfunction('An error occurred while fetching employee logs');
    }
   
  
  
} 
