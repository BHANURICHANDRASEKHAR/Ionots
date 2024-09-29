import axios from "axios";
import Cookie from 'js-cookie';
import { errorfunction, successfunction } from "../../toast";
async function loginfunction(setLoading, data, setShow) {
   const check=loginvali(data);
    if(check)
    { setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/getUsers",data);
           
            if (response.data.status) {
                console.log(response.data);
                if (response.data.data.email == data.email && data.password == response.data.data.password ) {
                  
                    if(response.data.data.role==data.role.toLowerCase()) 
                    {
                        const date = new Date();
                        date.setDate(date.getDate() + 365);
                        Cookie.set('x-token', JSON.stringify(response.data.data), {
                            secure: true,
                            sameSite: 'strict',
                            expires: date
                        });
                        setShow(prevShow => !prevShow); 
                    }
                    else{
                        errorfunction('Invalid Role');
                    }
                   
                } else {
                    errorfunction('Invalid Credentials');
                }
            } else {
                errorfunction('User not found '); // Provide a default error message
            }
        } catch (error) {
            console.error("Error fetching data", error);
            errorfunction('An error occurred while logging in'); // Provide feedback to the user
        } finally {
            setLoading(false); 
        }
    }
    setLoading(false);
}
export default loginfunction;
export async function  Signup(setloading,data,setIsSignup,setData,de)
{ 
const check=signvali(data)
    if(check){
        setloading(true);
        try{
            
            const response = await axios.post("http://localhost:5000/adduser",data);
            if(response.data.status)
            {
              successfunction(response.data.msg);
              setIsSignup(false)
              setData(de);
            }
            else{
                errorfunction(response.data.msg);
            }
            
        }
        catch(error)
        {
            console.error("Error fetching data",error);
            setloading(false);
        }
        setloading(false);
    }
}
{/*dealsdray-test-rglo.onrender.com */}
function loginvali(data)
{
    if(data.email.length==0 || data.password.length==0  )

    {
        errorfunction('All fields are required')
        return false;
    }
    

     else if (!mailtest(data.email)) {
        return false;
    }
   
    return true;
}
function signvali(data)
{
    if(data.email.length==0 || data.password.length==0 || data.confirmPassword.length==0 || data.username.length==0 )

    {
        errorfunction('All fields are required')
        return false;
    }
    
   
     else if (!mailtest(data.email)) {
        return false;
    } else if (data.password !== data.confirmPassword) {
        errorfunction("Passwords don't match");
        return false;
    } 
   
    return true;
}
export function mailtest(email)
{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!(emailRegex.test(email))) {
    errorfunction('Invalid email address');
  return false;
} 
return true
}