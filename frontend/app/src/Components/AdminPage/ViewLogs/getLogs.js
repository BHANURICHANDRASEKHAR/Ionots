import axios from "axios";
import { errorfunction, successfunction } from "../../../toast";
import { api } from "../../../App";
export default async function getManagerLogs(setLoading, setData, role) {
 
  if (role.role === 'employee') {
    setLoading(true);
    try {
      const response = await axios.get(`${api}/getPerticularemplogs`, {
        params: { _id: role._id }
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
      errorfunction('An error occurred while fetching employee logs');
    } finally {
      setLoading(false);
    }
  } else {
    errorfunction('You are not a manager');
  }
}
export  async function setStatus(userdata,value,setLoading,index,setdata,Total_data)
{
  setLoading(true);
  console.log(value)
    try{ 
        const response = await axios.post(`${api}/setStatus`,[userdata,value]);
        if(response.data.status==true) {
          Total_data[index]=response.data.data
          setdata(Total_data);
          successfunction('Status updated successfully');
          
        }
    }
    catch(error){
        console.log(error);
        errorfunction('An error occurred while fetching employee logs');
    }
   finally{
    setLoading(false);
    
   }
  
} 
