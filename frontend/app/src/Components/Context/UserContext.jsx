import React, { useEffect, useState } from 'react'
import getToken  from './token';
export const Context=React.createContext();
export default function UserContext({children}) {
  const [data, setdata] = useState([])
  const [role,setRole]=useState(null);
  const [empdata,setempdata]=useState([])
  const [userdata,setuserdata] = useState([]);
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    const token = getToken();
    if(token){
     
      setRole(JSON.parse(token));
    }
  },[]);
  

    const [show,setShow]=useState(false)
  return (
   <Context.Provider value={{show,setShow,data,empdata,setempdata, setdata,userdata,setuserdata,role,setRole}}>
   {children}
   </Context.Provider>
  )
}
