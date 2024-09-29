import axios  from "axios";
export default async function getEmployeeLogs(setLoading,setData,role)
{
    setLoading(true);
    try{
        
        const response = await axios.get("http://localhost:5000/getemplogs",{headers:{'x-token':role},params:role});
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