import axios from "axios";
import { errorfunction,successfunction } from "../../../toast";
export default async function submissionForm(setLoading,data,role,setData)
{
    const flag=check(data)
    if(flag)
    {
        const de={
            transactionType:'',
            ammount:'',
            description:''
        }
        data.email=role.email;
        data.username=role.username;
       
        setLoading(true);
      
        try{

            const response = await axios.post("https://complyance.onrender.com/submitform",data);
            if(response.data.status)
            {
                successfunction(response.data.msg);
                setData(de);
             }
            else
            {
                errorfunction(response.data.msg);
            }
        }
        catch(error)
        {
            errorfunction('An error occurred while submitting the form');
        }
        finally
        {
            setLoading(false);
        }
    }
   
}
function check(data)
{
    
if(data.transactionType.trim().length==0 || data.ammount.trim().length==0 || data.description.trim().length==0)
{
 errorfunction('All Fields are required');
 return false;
}
return true;
}