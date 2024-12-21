import axios  from "axios";
import { errorfunction,successfunction } from "../../../toast";
import getToken from "../../Context/token.js";
import { api } from "../../../App.jsx";
export default async function getManagerLogs(setLoading,setData,role)
{
  if(role.role=='employee')
  {
    
    setLoading(true);
    try{ 
        const response = await axios.get(`${api}/getemplogs`,{params:{role}});
        setData(response.data.data);
    }
    catch(error){
       
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
export  async function setStatus(userdata,value,filteredData,setData,setLoading)
{
  setLoading(true);
    try{ 
        const response = await axios.post(`${api}/setStatus`,[userdata,value]);
        setData(filteredData.filter((item) => item._id!== userdata._id));
        successfunction('Status updated successfully');
    }
    catch(error){
        console.log(error);
        errorfunction('An error occurred while fetching employee logs');
    }
   finally{
    setLoading(false);
    
   }
  
} 
