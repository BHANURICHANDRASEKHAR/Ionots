import axios  from "axios";
import { api } from "../../../App";
export default async function getManagerLogs(setLoading,setData,role)
{
    setLoading(true);
    try{
        
        const response = await axios.get(`${api}/getmnglogs`,{headers:{'x-token':role},params:role});
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